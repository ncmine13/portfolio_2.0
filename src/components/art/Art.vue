<template>
  <div class="art__wrapper">
    <div class="art__modal-mask" v-on:click="closeModal()" v-bind:class="{ active: artCatSelected }"></div>
    <art-modal v-if="artCatSelected" :theme="selectedTheme"></art-modal>
    <div class="art__statement-wrapper">
      <div class="h2-size site-width">Statement</div>
      <div v-html="statement" class="art__statement site-width"></div>
    </div>
    <div class="art__themes double-wrapper-pad site-width">
      <div class="art__theme-wrapper" v-for="theme in themes" :key="theme.id" v-on:click="selectArtCategory(theme)">
        <div class="art__theme" v-bind:style=" getBgImage(theme)"></div>
        <div class="art__theme--name">{{ theme.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import artCopy from '../../data/art-info.json'
import artModal from './ArtModal'

export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Art',
  data () {
    return {
      copy: artCopy,
      artCatSelected: false,
      selectedTheme: ''
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
    },
    selectArtCategory (theme) {
      this.selectedTheme = theme
      this.artCatSelected = true
      let body = document.querySelector('body')
      body.style.overflow = 'hidden'
    },
    closeModal () {
      this.artCatSelected = false
      let body = document.querySelector('body')
      body.style.overflow = 'auto'
    }
  },
  components: {
    artModal
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
  &__statement-wrapper {
    background-color: white;
    color: $gray;
    font-family: Georgia;
    padding: 60px 0;
  }
  &__statement {
    padding-top: 20px;
    line-height: 1.5;
    letter-spacing: 0.7px;
  }
  &__themes {
    @include flexbox_standard;
  }
  &__theme-wrapper {
    position: relative;
    margin: 10px 20px 30px 0;
    width: calc(100% / 3 - 20px);
    a {
      color: white;
    }
  }
  &__theme {
    background-size: cover;
    @include makeSquare;
    &--name {
      font-size: 20px;
      padding: 10px 0;
    }
  }
  &__modal-mask {
    display: none;
    position: fixed;
    top: 0;
    z-index: 4;
    width: 100vw;
    height: 100vh;
    background-color: rgba(187, 135, 39, 0.7);
    &.active {
      display: block;
    }
  }
  @include breakpoint(tablet-landscape) {
    &__theme-wrapper {
      width: calc(100% / 2 - 20px);
    }
  }
  @include breakpoint(mobile) {
    &__theme-wrapper {
      width: 100%;
    }
  }
}
</style>
