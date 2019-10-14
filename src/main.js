// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
//入口js
import Vue from 'vue'
import App from './App'

import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  // 也可以这样写
  render:h => h(App),
  //配置路由器
  router
  //产生的结果：1。多了几个组件标签  2。多了属性可以进行访问
})
