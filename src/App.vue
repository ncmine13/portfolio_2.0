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
  },
  name: 'App',
  components: {
    navComponent,
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
  font-size: 32px; 
}
@include breakpoint(tablet-landscape) {
  .name {
    font-size: 24px;
  }
}

</style>
