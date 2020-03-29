import variables from './vars'

export const themeVars = (name = '') => name ? variables[name] : variables

export const combineVars = (vars = {}, theme = variables) => {
  for (let name in vars) {
    theme[name] = vars[name]
  }
}

export let supportCssVars = () => window.CSS && window.CSS.supports && window.CSS.supports('--a', 0)

export let changeTheme = (vars = {}) => {
  if (!supportCssVars()) {
    throw new Error('Current Browser does NOT support CSS Variables!')
  }
  const style = window.document.documentElement.style
  for (let name in vars) {
    style.setProperty('--' + name, vars[name])
  }
}

export const enableCssVars = (options = {}) => {
  return import('css-vars-ponyfill').then(module => {
    const cssVars = module.default ? module.default : module
    changeTheme = variables => {
      cssVars({ ...options, variables })
    }
    supportCssVars = () => true
  })
}

export const onResize = ({ check, change, initMode, interval = 100 }) => {
  const windowResize = (cb, t) => {
    window.onresize = () => {
      clearTimeout(t)
      t = setTimeout(cb, interval)
    }
  }

  windowResize(() => {
    const mode = check()
    if (initMode !== mode) {
      initMode = mode
      change(mode)
    }
  })
}
