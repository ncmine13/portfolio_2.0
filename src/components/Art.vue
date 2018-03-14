<template>
  <div class="art-section__wrapper">
      <div>some content<br><br><br><br></div>
  </div>
</template>
<script>
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#FDB632')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Art',
  data () {
    return {
      msg: 'Art'
    }
  }
}
</script>
<style lang="sass-loader" scoped>
@import '../assets/styles/variables.scss';

.art-section {
  &__wrapper {
    background-color: $yellow;
    color: white;
  }
}

</style>
