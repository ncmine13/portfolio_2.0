<template>
  <div class="web-section__wrapper" v-bind:style="{ backgroundColor: colorScheme.background }">
    <div class="web-section__cover">
      <div class="web-section__overlay" v-bind:style="{ backgroundColor: colorScheme.overlay }"><div class="intro"> {{ intro }} </div></div>
    </div>
    <div class="h2-size site-width double-wrapper-pad">
      <span>{{ text1 }}</span>
      <div :class="{ active: isSegmentActive(segment) }" v-for="segment in webCopy" :key="segment.id" class="web-section__name" v-on:click="activateSection(segment)">
        <span class="name">{{ segment.name }}</span><span v-if="segment.id !== webCopy.length" class="comma">{{comma}}</span>
      </div><span>{{ ellipses }}</span>
    </div>
    <web-segment v-for="segment in webCopy" :key="segment.id" :class="{ active: isSegmentActive(segment) }" :segment="segment"></web-segment>
    <div class="h2-size site-width double-wrapper-pad" style="textAlign: right">{{ text2 }}</div>
  </div>
</template>

<script>
import webContent from '%/data/web-profile.json'
import webSegment from './WebSegment'

export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  mounted () {
    this.activeSegment = this.webCopy[0]
  },
  name: 'Web',
  data () {
    return {
      msg: 'Web',
      webCopy: webContent,
      colorScheme: this.$store.state.activeColorScheme,
      intro: 'I\'m Naomi, a fullstack developer and artist.',
      text1: 'I\'ve got',
      text2: '...and I want more.',
      activeSegment: '',
      ellipses: '...',
      comma: ', '
    }
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
  components: {
    webSegment
  }
}
</script>

<style lang="sass-loader" scoped>
@import "../../assets/styles/main.scss";

.web-section {
  &__wrapper {
    color: white;
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
      font-size: 40px;
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
  &__name {
    width: calc(100%/3);
    cursor: pointer;
    text-align: center;
    padding-bottom: 2px;
    display: inline;
    &.active {
      .name {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
