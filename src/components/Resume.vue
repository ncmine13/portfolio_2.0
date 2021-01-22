<template>
  <div class="resume-wrapper site-width">
    <a class="resume-download" :href="getResume()" download>{{text}}</a>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      text: 'Download Naomi Mine\'s Resume',
    };
  },
  methods: {
    getResume() {
      let path = require('../assets/resume/Naomi_Mine_Resume.pdf')
      return path
    }
  }
};
</script>

<style lang="sass-loader">
@import '../assets/styles/main.scss';
  .resume {
    &-download {
      text-decoration: underline;
      font-size: 18px;
    }
  @include breakpoint(mobile) {
      &-download {
        font-size: 14px;
      }
    }
  }
</style>
