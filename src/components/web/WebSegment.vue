<template>
  <div class="segment__wrapper site-width wrapper-pad">
    <div class="segment__intro h3-size">{{ segment.intro }}</div>
    <div v-if="segment.accomplishments" class="segment__accomplishments">
      <li v-for="accomplishment in segment.accomplishments" :key="accomplishment.id"> {{accomplishment}} </li>
    </div>
    <div class="stack" v-if="segment.stack">
      <div v-for="tech in segment.stack.ga" :key="tech.id"> {{ tech }}</div>
    </div>
    <web-project v-if="segment.projects" :projects="segment.projects"></web-project>
    <div class="segment__intro h3-size" v-if="segment.secondary"> {{ segment.secondary }} </div>
    <div class="stack" v-if="segment.stack">
      <div v-for="tech in segment.stack.additional" :key="tech.id"> {{ tech }}</div>
    </div>
  </div>
</template>

<script>
import webProject from './WebProject'
export default {
  name: 'WebSegment',
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
      max-width: 800px;
      &.active {
        display: block;
      }
    }
    &__name {
      cursor: pointer;
    }
    &__accomplishments {
      max-width: 700px;
      margin: 0 auto;
      li {
        list-style-type: circle;
        padding: 10px 0;
        list-style-position: inside;
        line-height: 1.5;
        text-indent: -1.4em;
      }
    }
    &__intro {
      padding: 20px 0;
      letter-spacing: 0.5px;
      line-height: 1.5;
    }
  }

</style>
