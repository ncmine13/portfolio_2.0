<template>
  <div class="h2-size intro">{{intro}}</div>
</template>

<script>
export default {
  name: 'WebBannerText',
  props: ['intro']
}
</script>

<style lang="sass-loader" scoped>
  .intro {
    font-size: 24px;
    padding: 100px 0;
    letter-spacing: 1px;
    line-height: 1.5;
    font-style: italic;
  }
</style>
