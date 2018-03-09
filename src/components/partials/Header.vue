<template>
  <div class="header__wrapper">
    <div class="header">
      <div class="header__logo"><img src="../../assets/cropped_collage.png" alt="logo"/></div>
      <div class="header__name h1-size">{{ name }}</div>
    </div>
    <nav-component></nav-component>
  </div>
</template>
<script>
import navComponent from './Nav'
export default {
  name: 'Header',
  data () {
    return {
      name: 'Naomi Mine',
      navContent: ['Web', 'Art', 'CV', 'Inspiration']
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
    color: $gray;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 50px;
    &__wrapper {
      width: 100%;
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
