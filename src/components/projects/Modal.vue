<template>
  <div class="modal-overlay">
    <div class="modal-close" v-on:click="closeModal">
      <img src="../../assets/close.svg" />
    </div>
    <div class="modal-content" v-on:click="closeModal">
      <carousel-wrapper v-if="showCarousel"></carousel-wrapper>
      <div class="modal-content-item" v-else>
        <img class="modal-image" alt="" :src="getImageSource()" />
        <div class="modal-image-details">
          <div class="modal-image-title">
            {{ getImageInfo.title !== "" ? getImageInfo.title : untitled }}
            <span>({{ getImageInfo.year }})</span>
          </div>
          <div class="modal-image-materials" v-if="'materials' in getImageInfo">
            {{ getImageInfo.materials }}
          </div>
          <div
            class="modal-image-dimensions"
            v-if="'dimensions' in getImageInfo"
          >
            {{ getImageInfo.dimensions }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carouselWrapper from "./CarouselWrapper.vue";

export default {
  name: "Modal",
  components: {
    carouselWrapper,
  },
  data() {
    return {
      untitled: "Untitled",
    };
  },
  computed: {
    isActive() {
      return this.$store.state.modalOpen;
    },
    showCarousel() {
      if (this.$store.state.activeImages.length > 1) {
        // console.log(this.$store.state.activeImages)
        return true
      }
      return false;
    },
    getImageInfo() {
      if (this.$store.state.activeImages.length > 0) {
        return this.$store.state.activeImages[0];
      }
    },
  },
  methods: {
    getImageSource() {
      if (this.$store.state.activeImages.length > 0) {
        let img = require("../../assets/images/art/" +
          this.$store.state.activeImages[0].img_path);
        return img;
      }
    },
    closeModal(e) {
      if (
        e.target !== e.currentTarget &&
        e.currentTarget !== document.querySelector(".modal-close")
      ) {
        return;
      }
      document.querySelector("body").style.overflow = "auto";
      this.$store.commit("deactivateImages");
      this.$store.commit("toggleModalOpen");
    },
  },
};
</script>

<style lang="sass-loader">
@import '../../assets/styles/main.scss';
.modal {
  &-overlay {
    cursor: pointer;
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.85);
  }
  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  &-content-item {
    cursor: auto;
    max-height: 80vh;
    max-width: 85vw;
  }
  &-image {
    display: block;
    max-width: 83vw;
    max-height: 75vh;
    &-details {
      line-height: 1.6;
      margin-top: 10px;
    }
    &-title {
      font-size: 24px;
      span {
        font-size: 16px;
      }
    }
    @include breakpoint(tablet-portrait) {
      &-details {
        font-size: 14px;
      }
      &-title {
        font-size: 20px;
        span {
          font-size: 14px;
        }
      }
    }
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
