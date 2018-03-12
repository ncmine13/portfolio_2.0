<template>
  <div id="app" v-bind:class="{homeView: hpActive}">
    <div class="header">
      <div v-if="hpActive" class='entry__wrapper'><img src='./assets/banner4.png'/></div>
      <header-component v-else></header-component>
    </div>
    <nav-component></nav-component>
    <router-view/>
  </div>
</template>

<script>
import navComponent from './components/partials/Nav'
import headerComponent from './components/partials/Header'
export default {
  name: 'App',
  computed: {
    hpActive () {
      // don't do this, just check route, much more straightforward
      return this.$store.state.homeView
    }
  },
  components: {
    navComponent,
    headerComponent
  }
}
</script>

<style lang="sass-loader">
@import './assets/reset.scss';
@import './assets/variables.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    /* background-color: $yellow; */
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
