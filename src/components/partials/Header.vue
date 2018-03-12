<template>
  <div class="header__wrapper">
    <div class="header__logo"><img src="../../assets/cropped_collage.png" alt="logo"/></div>
    <div class="header__name h1-size">{{ name }}</div>
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
  @import '../../assets/variables.scss';

  .header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      padding: 20px 50px 40px 50px;
      align-items: flex-end;
    }
    &__logo {
      height: 150px;
      width: 150px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
</style>
