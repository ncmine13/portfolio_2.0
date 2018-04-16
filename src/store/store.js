import Vue from 'vue'
import Vuex from 'vuex'
import routeData from '../data/route-data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    homeView: true,
    navStuck: false,
    iconColor: '#232528',
    routeData: routeData,
    activeColorScheme: '',
    activeFooterCopy: '',
    internalLink: '',
    activeArtTheme: '',
    showShortenedNav: false
  },
  mutations: {
    toggleHomeView (state, active) {
      state.homeView = active
    },
    activateArtTheme (state, theme) {
      state.activeArtTheme = theme
    },
    checkForShortNav(state) {
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
    toggleNavStick (state, sticky) {
      let navWrapper = document.querySelector('.nav__wrapper')
      state.navStuck = sticky

      if (sticky) {
        navWrapper.classList.add('fixed')
        navWrapper.parentNode.nextElementSibling.style.paddingTop = navWrapper.clientHeight + 'px'
      } else {
        navWrapper.classList.remove('fixed')
        navWrapper.parentNode.nextElementSibling.style.paddingTop = '0px'
      }
    }
  },
  actions: {
    handleStickyState (context, sticky) {
      if (context.state.navStuck !== sticky.value) {
        context.commit('toggleNavStick', sticky.value)
        context.commit('toggleIconColor', sticky.value)
      }
    },
    changePage (context, payload) {
      window.scrollTo(0, 0)
      context.commit('toggleHomeView', payload.showHomeView)
      context.commit('alterColorScheme', payload.path)
    }
  }
})
