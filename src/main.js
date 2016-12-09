import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App'
import ShowApps from './components/ShowApps'
import ShowSys from './components/ShowSys'

const routes = {
  '/': ShowApps,
  '/showapps': ShowApps,
  '/showsys': ShowSys
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})
