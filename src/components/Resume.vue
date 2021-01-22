<template>
  <div class="resume-wrapper">
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
  .resume {
    &-wrapper {
      max-width: 1000px;
      margin: 20px auto;
    }
    &-download {
      text-decoration: underline;
      font-size: 18px;
    }
  }
</style>
