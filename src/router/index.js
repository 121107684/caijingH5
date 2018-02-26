import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
import set from '@/components/set'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    },
    {
      path: '/set',
      name: 'set',
      component: set,
    },
    {
      path: '/info',
      name: 'info',
      component: info,
    }
  ]
})
