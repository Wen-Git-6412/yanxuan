import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from "@/components/HelloWorld"
import Home from "@/components/Home"
import Index from "@/components/index"
import Cate from "@/components/cate"
import Cart from "@/components/cart"
import User from "@/components/user"
import Detail from "@/components/detail"
import Detail1 from "@/components/cate/detail"
import Login from "@/components/login"
import Rser from "@/components/rser"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"Index",
          component:Index,
          meta:{
            Index:0
          }
        },

        {
          path:"/cate",
          name:"Cate",
          component:Cate,
          meta: {
            index: 1
          }
        },
        {
          path:"/cart",
          name:"Cart",
          component:Cart,
          meta: {
            index: 2
          }
        },
        {
          path:"/user",
          name:"User",
          component:User,
          meta: {
            index: 3
          }
        }
      ]
    },
    {
      path:"/detail",
      name:"Detail",
      component:Detail
    },
    {
      path:"/detail1",
      name:"Detail1",
      component:Detail1
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/rser",
      name:"Rser",
      component:Rser
    }
  ]
})
