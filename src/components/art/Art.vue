<template>
  <div class="art__wrapper">
    <div class="site-width">
      <div class="art__statement">{{ statement }}</div>
      <div class="art__themes double-wrapper-pad">
        <div class="art__theme-wrapper" v-for="theme in themes" :key="theme.id">
          <div class="art__theme" v-bind:style=" getBgImage(theme)"></div>
          <router-link :to="theme.route"><div class="art__theme-overlay"><div class="overlay-text">{{ theme.name }}</div></div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artCopy from '../../data/art-info.json'
export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Art',
  data () {
    return {
      copy: artCopy
    }
  },
  computed: {
    statement () {
      return this.copy.statement
    },
    themes () {
      return this.copy.themes
    }
  },
  methods: {
    getBgImage (theme) {
      let path = require('../../assets/images/art/thumbnails/' + theme.thumbnail)
      let src = 'url(' + path + ')'
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
  }
  &__theme-wrapper {
    position: relative;
    margin: 10px 10px 0px 0;
    width: calc(100% / 3 - 10px);
    a {
      color: white;
    }
  }
  &__theme {
    background-size: cover;
    @include makeSquare;
  }
  &__theme-overlay {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
    position: absolute;
    top: 0;
    opacity: 0;
    @include flexbox_aligned();
    justify-content: center;
    text-align: center;
    transition: 0.2s background-color;
    transition: 0.2s opacity;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      cursor: pointer;
      opacity: 1;
      .overlay-text {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>
