import Component from './index.vue'
export { default as cssVars } from '../../theme/Tag/index.js'

/* istanbul ignore next */
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
