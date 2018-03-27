<template>
  <div class="art__wrapper">
    <div class="site-width">
      <div class="art__statement">{{ statement }}</div>
      <div class="art__themes">
        <div class="art__theme-wrapper" v-for="theme in themes" :key="theme.id">
          <div class="art__theme" v-bind:style=" getBgImage(theme.pieces[0])"></div>
          <div class="art__theme-overlay">
            <div class="overlay-text">{{ theme.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artCopy from '../../data/art-info.json'
export default {
  beforeMount () {
    this.$store.commit('alterNavColor', '#FDB632')
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Art',
  data () {
    return {
      copy: artCopy
    }
  },
  computed : {
    statement () {
      return this.copy.statement
    },
    themes () {
      return this.copy.themes
    },
  },
  methods: {
    getBgImage (image) {
      let path = require('../../assets/' + image.img)
      let src = "url(" + path + ")"
      return { backgroundImage: src }
    }
  }
}
</script>
<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.art {
  &__wrapper {
    background-color: $yellow;
    color: white;
  }
  &__statement {
    padding: 60px 0;
    line-height: 1.5;
    letter-spacing: 0.7px;
    text-align: center;
  }
  &__themes {
    @include flexbox_standard;
    width: calc(100vh + 20px);
    margin: 0 auto;
  }
  &__theme-wrapper {
    margin: 0px 10px 10px 0;
    position: relative;
  }
  &__theme {
    background-size: cover;
  }
  &__theme, &__theme-overlay {
    height: calc(50vh);
    width: calc(50vh);
  }
  &__theme-overlay {
    position: absolute;
    top: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s background-color;
    transition: 0.2s opacity;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      cursor: pointer;
      opacity: 1;
      .overlay-text {
        font-size: 20px;
      }
    }
  }
}
</style>
