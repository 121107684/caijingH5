// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from 'axios'
import navhead from "./unil/nav.vue"

Vue.use(Mint);
Vue.component('navhead',navhead);
axios.defaults.baseURL = "https://kelacp.cn/api"
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,navhead},
  template: '<App/>'
})