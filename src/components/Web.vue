<template>
  <div class="web-section__wrapper">
    <web-tab-component :content="section" :key="section.id" v-for="section in copy"></web-tab-component>
  </div>
</template>

<script>
import webContent from '../data/web-info.json'
import webTabComponent from './partials/Web_Tabs'
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#027878')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Web',
  data () {
    return {
      msg: 'Web',
      copy: webContent
    }
  },
  components: {
    webTabComponent
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/main.scss';

.web-section {
  &__wrapper {
    background-color: $blue;
    color: white;
    padding: 20px 40px;
    .blurb {
      width: 85%;
      padding: 2rem 0;
    }
  }
}
</style>
