<template>
  <div class="insp-section__wrapper">
    <div class="insp-section__header double-wrapper-pad site-width">{{inspiration.header}}</div>
    <div class="insp-section__item-wrapper site-width double-wrapper-pad">
      <div class="insp-section__item" v-for="item in inspiration.items" :key="item.id">
        <a v-if="item.link" target="_blank" :href="item.link"><img :src="getBgImage(item)"/></a>
        <img v-else :src="getBgImage(item)"/>
        <div class="caption">{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import inspiration from '../../data/inspiration.json'
import Packery from 'packery'
import imagesLoaded from 'imagesloaded'
export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  mounted () {
    let imgContainer = document.querySelector('.insp-section__item-wrapper')
    imagesLoaded(imgContainer, { background: true }, function () {
      var elem = document.querySelector('.insp-section__item-wrapper')
      var pckry = new Packery(elem, {
        itemSelector: '.insp-section__item',
        gutter: 20
      })
    })
  },
  name: 'Insp',
  data () {
    return {
      msg: 'Inspiration',
      inspiration: inspiration
    }
  },
  methods: {
    getBgImage (item) {
      if (item['img_path']) {
        let path = require('../../assets/images/inspiration/' + item['img_path'])
        return path
      }
    }
  }
}
</script>
<style lang="sass-loader" scoped>
  @import '../../assets/styles/main.scss';
  .insp-section {
    &__wrapper {
      background-color: $red;
      color: white;
    }
    &__header {
      font-size: 28px;
    }
    &__item {
      width: calc(100%/3 - 20px);
      height: auto;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
      .caption {
        font-size: 16px;
      }
    }
    @include breakpoint(tablet-portrait) {
      &__item {
        width: calc(100%/2 - 20px);
      }
      &__header {
        font-size: 22px;
      }
    }
    @include breakpoint(mobile) {
      &__header {
        font-size: 16px;
      }
    }
  }
</style>
