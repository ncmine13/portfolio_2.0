<template>
  <div class="insp-section__wrapper">
    <div class="h2-size double-wrapper-pad site-width">{{inspiration.header}}</div>
    <div class="insp-section__item-wrapper site-width double-wrapper-pad">
      <div class="insp-section__item" v-for="item in inspiration.items" :key="item.id">
        <img :src="getBgImage(item)"/>
        <div class="caption">{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import inspiration from '../../data/inspiration.json'
import Packery from 'packery'

export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  mounted () {
    window.setTimeout(function () {
      var elem = document.querySelector('.insp-section__item-wrapper')
      var pckry = new Packery(elem, {
        itemSelector: '.insp-section__item',
        gutter: 20
      })
    }, 500)
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
  @import '../../assets/styles/variables.scss';
  .insp-section {
    &__wrapper {
      background-color: $red;
      color: white;
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
  }
</style>
