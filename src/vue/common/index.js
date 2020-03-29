import * as hooks from 'vue-function-api'

export const $props = {
  $mode: String,
  $template: [Function, Object],
  $renderless: Function
}

export const props = ['$mode', '$template', '$renderless']

export const $setup = ({ props, context, template }) => {
  const mode = val => typeof val === 'string' ? val : (context.root.$mode && context.root.$mode.value) || 'pc'
  const $view = hooks.computed(() => typeof props.$template !== 'undefined' ? props.$template : template(mode(props.$mode)))
  const $context = hooks.computed(() => context)
  return { $view, $bind: props, $context }
}

export const setup = ({ props, context, renderless, api }) => {
  const sdk = (typeof props.$renderless === 'function' ? props.$renderless : renderless)(props, context, hooks)
  const attrs = {}
  Array.isArray(api) && api.forEach(name => {
    const value = sdk[name]
    if (typeof value !== 'undefined') {
      attrs[name] = value
      context.parent[name] = value
    }
  })
  return attrs
}
