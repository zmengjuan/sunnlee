// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/registerCom'
import './utils/navigator'
import vantCom from './utils/registerVantCom'
import 'iview/dist/styles/iview.css'
import './utils/vConsole'
vantCom.forEach( item => {
  Vue.use(item)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
