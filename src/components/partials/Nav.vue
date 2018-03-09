<template>
  <div class="nav__wrapper">
    <nav>
      <div :key="item.id" v-for="item in navContent" router-link-to="/">{{ item }}</div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      name: 'Naomi Mine',
      navContent: ['Web', 'Art', 'CV', 'Inspiration']
    }
  }
}
</script>
<style lang="sass-loader">
  @import '../../assets/variables.scss';

  .nav {
    &__wrapper {
      display: flex;
      justify-content: center;
      nav {
        display: flex;
        justify-content: space-between;
        height: 100vh;
        width: 450px;
        div {
          padding: 0 10px;
          text-transform: uppercase;
          font-weight: bold;
          color: white;
          letter-spacing: 2px;
        }
      }
    }
  }

</style>
