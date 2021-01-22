<template>
  <div class="header__wrapper site-width">
    <div class="header__contact--wrapper">
      <div class="header__contact">
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
    @include breakpoint(tiny-mobile) {
      &__contact {
        svg {
          margin-left: 10px;
          width: 12px !important;
        }
      }
    }
  }
</style>
