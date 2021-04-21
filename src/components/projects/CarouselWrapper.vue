<template>
  <div class="carousel-wrapper">
      <carousel :navigationEnabled="true" :paginationSize="imgPaths.length" :perPage="1" :navigationNextLabel="nextLabel" :navigationPrevLabel="prevLabel">
          <slide v-for="image in imgPaths" :key="image.img_path" >
              <div class="image-block">
                  <div>
                    <img :src="getImg(image.img_path)" style="max-height: 70vh; max-width: 85vw;"/>
                    <div class="modal-image-title">{{ image.title }} <span>({{ image.year }})</span></div>
                    <div class="modal-image-materials">{{ image.materials }}</div>
                  </div>
              </div>
          </slide>
      </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'CarouselWrapper',
  data() {
      return {
          nextLabel: '<p class="nav-arrow">&#8250;</p>',
          prevLabel: '<p class="nav-arrow">&#8249;</p>'
      }
  },
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
    button.VueCarousel-navigation-button.VueCarousel-navigation-next, button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
        transform: none;
    }
    .carousel-wrapper {
        width: 100%;
    }
    .image-block {
        display: flex;
        justify-content: center;
    }
    .VueCarousel-slide {
        visibility: visible;
        flex-basis: 100%;
    }
    .nav-arrow {
        font-size: 32px;
        color: white;
        padding: 0 20px;
    }
</style>
