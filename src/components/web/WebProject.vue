<template>
  <div class="web-project__wrapper">
    <div class="web-project__cover">
      <div class="web-project__overlay" v-bind:style="{ backgroundColor: colorScheme.overlay }">
        <div class="intro"> {{ intro }} </div>
      </div>
    </div>
    <div class="h2-size site-width wrapper-pad">{{ text1 }}</div>
    <div class="web-project__segment-wrapper site-width">
      <div v-for="segment in webCopy" :key="segment.id" class="segment__name" v-on:click="activateSection(segment)">{{ segment.name }}</div>
    </div>
    <web-segment v-for="segment in webCopy" :key="segment.id" :class="{ active: isSegmentActive(segment) }" :segment="segment"></web-segment>
    <div class="h2-size site-width wrapper-pad" style="textAlign: right">{{ text2 }}</div>
  </div>
</template>

<script>
import webProfile from '../../data/web-profile.json'
import webSegment from './WebSegment'

export default {
  name: 'WebProject',
  mounted () {
    this.activeSegment = this.webCopy[0]
  },
  data () {
    return {
      colorScheme: this.$store.state.activeColorScheme,
      intro: "I'm Naomi, and I'm dedicated to being a lifelong learner.",
      webCopy: webProfile,
      text1: "I've got...",
      text2: "...and I want more.",
      activeSegment: ''
    }
  },
  computed: {

  },
  methods: {
    activateSection (segment) {
      this.activeSegment = segment
    },
    isSegmentActive (segment) {
      if (this.activeSegment === segment) {
        return true
      }
    }
  },
  props: ['project'],
  components: {
    webSegment
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.web-project {
  &__wrapper {
  }
  &__cover {
    height: 50vh;
    background-image: url('../../assets/peter_sis.jpg');
    background-size: cover;
    position: relative;
  }
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .intro {
      font-size: 35px;
      padding: 0 40px;
      text-align: center;
      letter-spacing: 1.5px;
    }
  }
  &__segment-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
}

</style>
