import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

/** ******   style   *************/
import 'styles/reset.css'
import 'styles/global.scss'

/** ******   prototype   *************/
Vue.prototype.$ = $

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
