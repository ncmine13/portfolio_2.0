import Es6Promise from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import routeData from '../data/route-data.json'

Es6Promise.polyfill()
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    homeView: true,
    iconColor: '#232528',
    routeData: routeData,
    activeColorScheme: '',
    activeFooterCopy: '',
    internalLink: '',
    activeArtTheme: '',
    showShortenedNav: false,
    activeProjectCat: '',
    modalOpen: false,
    activeImages: [],
  },
  mutations: {
    toggleHomeView (state, active) {
      state.homeView = active
    },
    activateArtTheme (state, theme) {
      state.activeArtTheme = theme
    },
    checkForShortNav (state) {
      state.showShortenedNav = window.innerWidth <= 500
    },
    alterColorScheme (state, route) {
      if (state.routeData.find(schema => schema.page === route)) {
        let schema = state.routeData.find(schema => schema.page === route)
        state.activeFooterCopy = schema['footer_text']
        state.internalLink = schema.link
        state.activeColorScheme = schema.colors
      }
    },
    toggleIconColor (state, sticky) {
      state.iconColor = sticky ? '#fff' : '#232528'
    },
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
  actions: {
    changePage (context, payload) {
      window.scrollTo(0, 0)
      context.commit('toggleHomeView', payload.showHomeView)
      context.commit('alterColorScheme', payload.path)
    }
  }
})
