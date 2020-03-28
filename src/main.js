import Vue from 'vue'
import App from './App.vue'
import { plugin } from 'vue-function-api'
import './notify'

Vue.config.productionTip = false

Vue.use(plugin)

Vue.prototype.$mode = Vue.observable({ value: 'mobile' })

new Vue({
  render: h => h(App)
}).$mount('#app')
