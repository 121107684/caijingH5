// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from 'axios'
import navhead from "./unil/nav.vue"
import navfooter from "./unil/footer.vue"
//mport $ from 'jquery'



Vue.use(Mint);
Vue.use(Vuex);
Vue.component('navhead',navhead);
Vue.component('navfooter',navfooter);
axios.defaults.baseURL = "https://kelacp.cn/h5"
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
/* eslint-disable no-new */
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++;
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App,navhead,navfooter},
  template: '<App/>'
})
