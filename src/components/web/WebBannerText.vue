<template>
  <div class="h2-size intro intro-pad">{{ intro }}</div>
  <!-- <div class="h2-size intro intro-pad" v-bind:style="{ backgroundColor: bgColor}">{{ intro }}</div> -->
</template>

<script>
export default {
  name: 'WebBannerText',
  computed: {
    bgColor () {
      // return this.$store.state.activeColorScheme.accent
    }
  },
  props: ['intro']
}
</script>

<style lang="sass-loader" scoped>
  .intro {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 1.5;
    font-style: italic;
    box-shadow: 1px 3px 10px #524b4b;
  }
</style>
