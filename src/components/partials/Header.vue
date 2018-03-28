<template>
  <div class="header__wrapper site-width">
    <div class="header__logo"><img src="../../assets/topView.png" alt="logo"/></div>
    <div class="header__contact--wrapper">
      <div class="header__contact">
        <img src="../../assets/icons/linkedin.png" />
        <img src="../../assets/icons/github.svg" />
        <img src="../../assets/icons/email.png" />
      </div>
    </div>
  </div>
</template>
<script>
import navComponent from './Nav'
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
      img {
        height: 24px;
        margin-left: 30px;
      }
      &--wrapper {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
