<template>
  <div class="segment__wrapper site-width wrapper-pad">
    <div class="segment__intro h3-size">{{ segment.intro }}</div>
    <web-project v-if="segment.projects" :projects="segment.projects"></web-project>
    <div class="segment__intro h3-size" v-if="segment.secondary"> {{ segment.secondary }} </div>
  </div>
</template>

<script>
import webProject from './WebProject'
export default {
  name: 'WebSegment',
  data () {
    return {

    }
  },
  methods: {
    activateSection () {
      console.log('active')
    },
  },
  components: {
    webProject
  },
  props: ['segment']
}
</script>

<style lang="sass-loader" scoped>
@import "../../assets/styles/main.scss";
  .segment {
    &__wrapper {
      display: none;
      &.active {
        display: block;
      }
    }
    &__name {
      cursor: pointer;
    }
    &__intro {
      padding: 20px 0;
      letter-spacing: 0.5px;
      line-height: 1.5;
    }
  }

</style>
