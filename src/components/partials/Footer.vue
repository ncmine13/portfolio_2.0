<template>
  <div class="footer__wrapper" v-bind:style="{ backgroundColor: activeFooterColor }">
    <div class="footer__content site-width">
      {{ activeText }}
      <router-link :to="activeLink"><span>&#8594;</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    activeFooterColor () {
      return this.$store.state.activeColorScheme.footer
    },
    activeText () {
      return this.$store.state.activeFooterCopy
    },
    activeLink () {
      return this.$store.state.internalLink
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.footer {
  &__wrapper {
    @include flexbox(row, left, center)
    color: white;
  }
  &__content {
    @include flexbox(row, null, center)
    padding: 20px 0;
    font-size: 20px;
    letter-spacing: 0.5px;
    span {
      font-size: 40px;
      margin-left: 20px;
      color: white;
    }
  }
  @include breakpoint(tablet-portrait) {
    &__content {
      font-size: 16px;
    }
  }
  @include breakpoint(mobile) {
    &__wrapper {
      height: 15vh;
    }
  }
}

</style>
