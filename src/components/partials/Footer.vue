<template>
  <div class="footer__wrapper" v-bind:style="{ backgroundColor: activeFooterColor }">
    <div class="footer__content site-width">{{ text }}<span>&#8594;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      text: 'I\'ve only been web developing for a year, but I\'ve been making things for a lifetime...'
    }
  },
  computed: {
    activeFooterColor () {
      return this.$store.state.activeColorScheme.footer
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.footer {
  &__wrapper {
    /* background-color: $yellow; */
    height: 20vh;
    display: flex;
    align-items: center;
  }
  &__content {
    font-weight: 600;
    display: flex;
    align-items: center;
    span {
      font-size: 40px;
      margin-left: 20px;
    }
  }
}

</style>
