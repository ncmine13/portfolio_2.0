import Vue from 'vue'
import Vuex from 'vuex'
// sync state and route
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    homeView: true,
    navBgColor: '#FDB632'
  },
  mutations: {
    toggleHomeView (state, active) {
      state.homeView = active
    },
    alterNavColor (state, color) {
      state.navBgColor = color
    },
    toggleNavStick (state, sticky) {
      let navWrapper = document.querySelector('.nav__wrapper')
      let nextComponent = navWrapper.nextElementSibling
      let navHeight = document.querySelector('.nav__wrapper').clientHeight
      // find bg color for fixed state
      if (sticky) {
        navWrapper.classList.add('fixed')
        nextComponent.style.paddingTop = navHeight + 'px'
      } else {
        navWrapper.classList.remove('fixed')
        nextComponent.style.paddingTop = '0px'
      }
    }
  },
  actions: {

  }
})
