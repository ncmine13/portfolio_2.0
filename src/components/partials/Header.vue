<template>
  <div class="header__wrapper site-width">
    <router-link :to="'/'"><div class="header__logo"><img src="../../assets/topView.png" alt="logo"/></div></router-link>
    <div class="header__contact--wrapper">
      <div class="header__contact">
        <svgicon icon="gmail" width="22" height="18" :color="getIconColor"></svgicon>
        <svgicon icon="github_logo" width="22" height="18" :color="getIconColor"></svgicon>
        <svgicon icon="linkedin" width="22" height="18" :color="getIconColor"></svgicon>
      </div>
    </div>
  </div>
</template>
<script>
import navComponent from './Nav'
import '../../compiled-icons/index'
export default {
  name: 'Header',
  data () {
    return {
      name: 'Naomi Mine'
    }
  },
  computed: {
    getIconColor () {
      return this.$store.state.iconColor
    }
  },
  components: {
    navComponent
  }
}
</script>
<style lang="sass-loader">
  @import '../../assets/styles/variables.scss';

  .header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      padding: 20px 0px 40px 0px;
    }
    &__logo {
      height: 105px;
      img {
        width: auto;
        height: 100%;
      }
    }
    &__contact {
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 4;
      svg {
        margin-left: 20px;
      }
      &--wrapper {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
