import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

let axiosInstance = axios.create({
  //
})

// prototype sections
Vue.prototype.$axios = axiosInstance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
