<template>
  <div class="modal-overlay" v-bind:class="{ active: isActive }">
    <div class="modal-close" v-on:click="closeModal">
      <img src="../../assets/close.svg" />
    </div>
    <div class="modal-content" v-on:click="closeModal">
      <carousel-wrapper v-if="showCarousel"></carousel-wrapper>
      <img v-else class="modal-image" alt="" :src="getImg()" />
    </div>
  </div>
</template>

<script>
import carouselWrapper from './CarouselWrapper.vue'

export default {
  name: 'Modal',
  components: {
    carouselWrapper
  },
  computed: {
    isActive() {
      return this.$store.state.modalOpen
    },
    showCarousel() {
      return false
    }
  },
  methods: {
    getImg() {
      if (this.$store.state.activeImages.length > 0) {
        let img = require('../../assets/images/art/' +
          this.$store.state.activeImages[0])
        return img
      }
    },
    closeModal(e) {
      if (
        e.target !== e.currentTarget &&
        e.currentTarget !== document.querySelector('.modal-close')
      ) {
        return
      }
      document.querySelector('body').style.overflow = 'auto'
      this.$store.commit('deactivateImages')
      this.$store.commit('toggleModalOpen')
    }
  }
};
</script>

<style lang="sass-loader">
/*  
    - add x
    */
.modal {
  &-overlay {
    display: none;
    &.active {
      cursor: pointer;
      display: block;
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
    }
  }
  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  &-image {
    cursor: auto;
    max-height: 80vh;
    max-width: 85vw;
  }
  &-close {
    height: 15px;
    width: 15px;
    position: absolute;
    right: 0;
    padding: 20px;
    z-index: 5;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
