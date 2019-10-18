// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
//入口js
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App'

import router from './router'
import store from './store'
// Vue.config.productionTip = false

Vue.component(Button.name, Button)  //ui组件

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  // 也可以这样写
  render:h => h(App),
  //配置路由器
  router,  // 使用上vue-router
  //产生的结果：1。多了几个组件标签  2。多了属性可以进行访问
  store  // 使用上给vuex
})
