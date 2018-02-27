import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
import about from '@/components/about'
import copyright from '@/components/copyright'
import declaration from '@/components/declaration'
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
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: copyright,
    },
    {
      path: '/declaration',
      name: 'declaration',
      component: declaration,
    },
    {
      path: '/info',
      name: 'info',
      component: info,
    }
  ]
})
