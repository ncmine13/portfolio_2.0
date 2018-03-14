<template>
  <div class="web-section__wrapper">
    <div class="web-section__content-wrapper site-width">
      <div class="blurb h2-size"> {{ blurbs[0].blurb }} </div>
      <current-component :current="currentProjects"></current-component>
    </div>
  </div>
</template>
<script>
import webCopy from '../data/web-profile.json'
import currentComponent from './Web_Current'
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#027878')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Web',
  data () {
    return {
      msg: 'Web',
      copy: webCopy
    }
  },
  computed: {
    blurbs () {
      return this.copy.find(item => item.hasOwnProperty('content_blocks'))['content_blocks']
    },
    currentProjects () {
      return this.copy.find(item => item.hasOwnProperty('current'))['current']
    }
  },
  components: {
    currentComponent
  }
}
</script>
<style lang="sass-loader" scoped>
@import '../assets/styles/main.scss';

.web-section {
  &__wrapper {
    background-color: $blue;
    color: white;
    padding: 20px;
    .blurb {
      width: 85%;
      margin: 0 auto;
      padding: 2rem 0;
      text-align: center;
    }
  }
}

</style>
