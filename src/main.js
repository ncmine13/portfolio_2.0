// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import { store } from './store/store'
import VueSVGIcon from 'vue-svgicon'

Vue.config.productionTip = false
Vue.use(VueSVGIcon)

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/') {
    store.commit('toggleHomeView', true)
    // store.commit('alterColorScheme', path)
  } else {
    let path = to.fullPath
    store.commit('toggleHomeView', false)
    store.commit('alterColorScheme', path)
  }
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
