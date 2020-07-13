import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Cart from '@/components/cart'
import Gory from '@/components/gory'
import My from '@/components/my'
import Shou from '@/components/Shou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Shou',
          name: 'Shou',
          component: Shou
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/Gory',
          name: 'Gory',
          component: Gory
        },
        {
          path: '/My',
          name: 'My',
          component: My
        }
      ]
    }
  ]
})
