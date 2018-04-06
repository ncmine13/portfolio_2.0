import Vue from 'vue'
import Vuex from 'vuex'
// sync state and route
import colorSchema from '../data/color-scheme.json'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    homeView: true,
    navStuck: false,
    navBgColor: '#FDB632',
    iconColor: '#232528',
    colorSchema: colorSchema,
    activeColorScheme: '',
    activeArtTheme: ''
  },
  mutations: {
    toggleHomeView (state, active) {
      state.homeView = active
    },
    alterColorScheme (state, route) {
      console.log('scheme')
      if (state.colorSchema.find(schema => schema.page === route)) {
        let scheme = state.colorSchema.find(schema => schema.page === route).colors
        state.activeColorScheme = scheme
      }
    },
    activateArtTheme (state, theme) {
      state.activeArtTheme = theme
    },
    toggleIconColor (state, sticky) {
      state.iconColor = sticky ? '#fff' : '#232528'
    },
    toggleNavStick (state, sticky) {
      let navWrapper = document.querySelector('.nav__wrapper')
      let nextComponent = navWrapper.nextElementSibling
      let navHeight = document.querySelector('.nav__wrapper').clientHeight
      if (sticky) {
        state.navStuck = true
        navWrapper.classList.add('fixed')
        nextComponent.style.paddingTop = navHeight + 'px'
      } else {
        state.navStuck = false
        navWrapper.classList.remove('fixed')
        nextComponent.style.paddingTop = '0px'
      }
    }
  },
  actions: {
    handleStickyState (context, sticky) {
      if (context.state.navStuck !== sticky.value) {
        context.commit('toggleNavStick', sticky.value)
        context.commit('toggleIconColor', sticky.value)
      }
    }
  }
})
