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
    }
  },
  actions: {

  }
})
