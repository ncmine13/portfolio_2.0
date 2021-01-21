<template>
  <div class="carousel-wrapper">
      <carousel :navigationEnabled="true" :paginationSize="imgPaths.length" :perPage="1">
          <slide v-for="path in imgPaths" :key="path" >
              <div class="block">
                  <img :src="getImg(path)" style="max-height: 70vh; max-width: 85vw;"/>
              </div>
          </slide>
      </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'CarouselWrapper',
  components: {
      Carousel,
      Slide
  },
  computed: {
      imgPaths() {
           return this.$store.state.activeImages
      }
  },
  methods: {
      getImg(path) {
          let imgPath = require('../../assets/images/art/' + path)
          return imgPath
      }
  }
};
</script>

<style lang="sass-loader">
    .carousel-wrapper {
        width: 100%;
    }
    .block {
        background-color: red;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .VueCarousel-slide {
        visibility: visible;
        flex-basis: 100%;
    }
</style>
