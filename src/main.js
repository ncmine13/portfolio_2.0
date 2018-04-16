// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Es6Promise from 'es6-promise'
import Vue from 'vue'
import App from './App'
import { router } from './router'
import { store } from './store/store'
import VueSVGIcon from 'vue-svgicon'

Es6Promise.polyfill()
Vue.config.productionTip = false
Vue.use(VueSVGIcon)

router.beforeEach((to, from, next) => {
  let path = to.fullPath
  let showHomeView = true
  if (path !== '/') { showHomeView = false }
  store.dispatch('changePage', {showHomeView: showHomeView, path: path})
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
