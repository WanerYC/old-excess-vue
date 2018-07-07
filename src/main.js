import Vue from 'vue'
import App from './App.vue'

// 导入css文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'

// 引入路由对象
import router from './routes/router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
