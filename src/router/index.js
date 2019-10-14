// 路由器对象模型创建

// 引入文件
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由，应该是多个用routers，使用数组的方式
  routes:[
    {
      path:'/home',
      component:Home,
      //meta 是否显示
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    // 默认显示
    {
      path:'/',
      redirect:'./home'
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
