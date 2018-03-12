<template>
  <div class="web-section__wrapper">
    <div>some content<br><br><br><br></div>
  </div>
</template>
<script>
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#027878')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Web',
  data () {
    return {
      msg: 'Web'
    }
  }
}
</script>
<style lang="sass-loader" scoped>
@import '../assets/variables.scss';

.web-section {
  &__wrapper {
    background-color: $blue;
    color: white;
  }
}

</style>
