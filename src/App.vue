<template>
  <div id="app" v-bind:class="{ homeView: hpActive }">
    <div class="header">
      <div v-if="hpActive" class='entry__wrapper'><img src='./assets/banner5.png'/></div>
      <header-component v-else></header-component>
    </div>
    <div v-if="hpActive" class="entry__name">Naomi Mine</div>
    <nav-component></nav-component>
    <router-view/>
    <footer-component v-if="!hpActive"></footer-component>
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

      this.$store.dispatch('handleStickyState', { value: stickBool })
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.homeView {
    background-color: rgb(253, 182, 50);
    padding: 40px;
    height: calc(100vh - 80px);
  }
}
.entry {
  &__wrapper {
    float: left;
    img {
      height: calc(100vh - 80px);
    }
  }
  &__name {
    font-size: 60px;
    float: left;
    padding-left: 40px;
    font-family: 'Baskerville', Georgia, serif;
  }
}

</style>
