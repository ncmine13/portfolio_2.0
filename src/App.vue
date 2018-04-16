<template>
  <div id="app" v-bind:class="{ homeView: hpActive }">
    <div class="headers">
      <div v-if="hpActive" class='entry__wrapper'><img src='./assets/banner5.png'/></div>
      <header-component v-else></header-component>
      <div v-if="hpActive" class="entry__type-wrapper">
        <div class="entry__name serif">Naomi Mine</div>
        <nav-component></nav-component>
      </div>
      <nav-component v-else></nav-component>
    </div>
    <router-view/>
    <footer-component v-if="!hpActive"></footer-component>
    <contact-component v-if="!hpActive"></contact-component>
  </div>
</template>

<script>
import navComponent from './components/partials/Nav'
import headerComponent from './components/partials/Header'
import footerComponent from './components/partials/Footer'
import contactComponent from './components/partials/Email'

export default {
  mounted () {
    window.addEventListener('scroll', this.handleNavDisplay, false)
    window.addEventListener('resize', this.resizeHandler, false)
    this.$store.commit('checkForShortNav')
  },
  name: 'App',
  computed: {
    hpActive () {
      return this.$store.state.homeView
    }
  },
  components: {
    navComponent,
    headerComponent,
    footerComponent,
    contactComponent
  },
  methods: {
    handleNavDisplay () {
      let stickBool = true
      if (window.pageYOffset <= this.headerHeight()) { stickBool = false }
      this.$store.dispatch('handleStickyState', { value: stickBool })
    },
    headerHeight () {
      return document.querySelector('.header__wrapper').clientHeight
    },
    resizeHandler () {
      this.headerHeight()
      this.handleNavDisplay()
      this.$store.commit('checkForShortNav')
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
}

.homeView {
  padding: 40px;
  background-color: rgb(253, 182, 50);
  height: calc(100vh - 80px);
  .headers {
    height: 100%;
    @include flexbox(row, null, center);
    @include breakpoint(tablet-portrait) {
      @include flexbox(column, center, null);
    }
  }
  @include breakpoint(mobile) {
    padding: 20px;
    height: calc(100vh - 40px);
  }
}

.entry {
  &__wrapper {
    img {
      width: 100%;
    }
  }
  &__name {
    font-size: 70px;
  }
  &__wrapper, &__type-wrapper {
    width: calc(100% / 2 - 40px);
  }
  &__type-wrapper {
    padding-left: 80px;
    @include flexbox(column, center, null);
  }
  @include breakpoint(tablet-landscape) {
    &__name{
      font-size: 55px;
    }
    &__type-wrapper {
      padding-left: 40px;
    }
  }
  @include breakpoint(tablet-portrait) {
    &__wrapper, &__type-wrapper {
      width: 60%;
      margin: 0 auto;
    }
    &__type-wrapper {
      padding-left: 0;
    }
  }
  @include breakpoint(mobile) {
    &__name {
      font-size: 50px;
    }
    &__wrapper, &__type-wrapper {
      width: 80%;
      margin: 0 auto;
    }
  }
}

</style>
