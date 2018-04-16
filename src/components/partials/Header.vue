<template>
  <div class="header__wrapper site-width">
    <router-link :to="'/'"><div class="header__logo"><img src="../../assets/topView.png" alt="logo"/></div></router-link>
    <div class="header__contact--wrapper">
      <div class="header__contact">
        <a href="mailto:naomi.mine@gmail.com"><svgicon icon="gmail" width="22" height="18" :color="getIconColor"></svgicon></a>
        <a href="https://github.com/ncmine13" target="_blank"><svgicon icon="github_logo" width="22" height="18" :color="getIconColor"></svgicon></a>
        <a href="https://www.linkedin.com/in/naomi-mine/" target="_blank"><svgicon icon="linkedin" width="22" height="18" :color="getIconColor"></svgicon></a>
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
  @import '../../assets/styles/main.scss';

  .header {
    &__wrapper {
      @include flexbox(row, space-between, null);
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
      @include flexbox(row, null, center);
      position: fixed;
      z-index: 4;
      svg {
        margin-left: 20px;
      }
      &--wrapper {
        @include flexbox(row, flex-end, null);
      }
    }
    @include breakpoint(mobile) {
      &__logo {
        height: 75px;
      }
      &__contact {
        svg {
          margin-left: 10px;
          width: 15px !important;
        }
      }
    }
  }
</style>
