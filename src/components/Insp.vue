<template>
  <div class="insp-section__wrapper">
      <div>some content<br><br><br><br></div>
  </div>
</template>
<script>
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#801638')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Insp',
  data () {
    return {
      msg: 'Inspiration'
    }
  }
}
</script>
<style lang="sass-loader" scoped>
  @import '../assets/variables.scss';
  .insp-section {
    &__wrapper {
      background-color: $red;
      color: white;
    }
  }
</style>
