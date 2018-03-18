<template>
  <div class="web-section__wrapper">
    <div class="web-section__content-wrapper site-width">
      <div  v-bind:style="[{textAlign: 'right'}, {marginLeft: '15%'}]" class="blurb h3-size"> {{ blurbs[0].blurb }} </div>
      <current-component :current="currentProjects"></current-component>
      <div class="blurb h3-size"> {{ blurbs[1].blurb }} </div>
      <past-component :past="pastProjects"></past-component>
    </div>
  </div>
</template>
<script>
import webCopy from '../data/web-profile.json'
import currentComponent from './Web_Current'
import pastComponent from './Web_Past'
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
    },
    pastProjects () {
      return this.copy.find(item => item.hasOwnProperty('past_ga'))['past_ga']
    }
  },
  components: {
    currentComponent,
    pastComponent
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
      padding: 2rem 0;
    }
  }
}

</style>
