<template>
  <div class="footer__wrapper">
    <div class="footer__content site-width">{{ text }}<span>&#8594;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      text: 'It\'s been a crazy year, but I have done other stuff in my life...'
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.footer {
  &__wrapper {
    background-color: $yellow;
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
