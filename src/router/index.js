import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detal from '@/pages/detal/Detal'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detal/:id',
      name: 'Detal',
      component: Detal
    }],
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return {x : 0, y : 0 }
  }
})
