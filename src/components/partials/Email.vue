<template>
  <div class="contact__wrapper h3-size">
    <div class="site-width contact">{{ text }}<span>{{ email }}.</span></div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      text: 'Wanna get in touch? Shoot me an email at ',
      email: 'naomi.mine@gmail.com'
    }
  }
}
</script>

<style lang="sass-loader">
  @import '../../assets/styles/main.scss';
  .contact {
    &__wrapper {
      text-align: center;
      padding: 80px 0;
    }
    span {
      font-weight: bold;
    }
    @include breakpoint(mobile) {
      &__wrapper {
        padding: 40px 0;
      }
    }
  }
</style>
