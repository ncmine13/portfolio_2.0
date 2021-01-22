<template>
  <div id="app">
    <div class="headers">
      <div class="name"><a href="/">Naomi Mine</a></div>
      <nav-component></nav-component>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navComponent from './components/Nav'

export default {
  mounted () {
    window.addEventListener('scroll', this.handleNavDisplay, false)
    // window.addEventListener('resize', this.resizeHandler, false)
    // this.$store.commit('checkForShortNav')
  },
  name: 'App',
  components: {
    navComponent,
  },
  methods: {
    // resizeHandler () {
    //   if (!this.$store.state.homeView) {
    //     this.headerHeight()
    //     this.handleNavDisplay()
    //   }
    //   this.$store.commit('checkForShortNav')
    // }
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
  margin: 20px;
}
.headers {
  text-align: center;
}

.name {
  font-size: 30px; 
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
      padding-top: 20px;
    }
    &__wrapper, &__type-wrapper {
      width: 80%;
      margin: 0 auto;
    }
  }
  @include breakpoint(tiny-mobile) {
    &__name {
      font-size: 38px;
    }
  }
}

</style>
