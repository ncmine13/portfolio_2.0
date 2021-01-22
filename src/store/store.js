import Es6Promise from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import routeData from '../data/route-data.json'

Es6Promise.polyfill()
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    routeData: routeData,
    activeProjectCat: '',
    modalOpen: false,
    activeImages: [],
  },
  mutations: {
    changeActiveProjectCat (state, category) {
      state.activeProjectCat = category
    },
    toggleModalOpen (state) {
      state.modalOpen = !state.modalOpen
    },
    activateImages (state, images) {
      state.activeImages = images
    },
    deactivateImages (state) {
      state.images = []
    }
  },
  // actions: {
  //   changePage (context, payload) {
  //     window.scrollTo(0, 0)
  //     context.commit('toggleHomeView', payload.showHomeView)
  //     context.commit('alterColorScheme', payload.path)
  //   }
  // }
})
