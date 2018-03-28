<template>
  <div id="app" v-bind:class="{ homeView: hpActive }">
    <div class="header">
      <div v-if="hpActive" class='entry__wrapper'><img src='./assets/banner4.png'/></div>
      <header-component v-else></header-component>
    </div>
    <nav-component></nav-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navComponent from './components/partials/Nav'
import headerComponent from './components/partials/Header'
import footerComponent from './components/partials/Footer'

export default {
  mounted () {
    window.addEventListener('scroll', this.handleNavDisplay, false)
    window.addEventListener('resize', this.resizeHandler, false)
  },
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    hpActive () {
      return this.$store.state.homeView
    },
    headerHeight () {
      return document.querySelector('.header').clientHeight
    }
  },
  components: {
    navComponent,
    headerComponent,
    footerComponent
  },
  methods: {
    handleNavDisplay () {
      let stickBool = true
      if (window.pageYOffset <= this.headerHeight) { stickBool = false }

      this.$store.commit('toggleNavStick', stickBool)
    },
    resizeHandler () {
      console.log('resizing')
      // reset distance from top
    }
  }
}
</script>

<style lang="sass-loader">
@import './assets/styles/reset.scss';
@import './assets/styles/main.scss';
#app {
  font-family: 'Imprima', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray;
  height: 100vh;
  &.homeView {
    background-color: $yellow;
  }
}
.entry {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    img {
      width: 450px;
    }
  }
}

</style>
