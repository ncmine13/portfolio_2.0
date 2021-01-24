<template>
  <div class="images-wrapper">
    <div class="images-item" v-for="item in imageData.items" :key="item.id">
      <a target="_blank" :href="item.link"
        ><img
          :src="getBgImage(item)"
          v-on:click="toggleModal(item)"
          class="images-image"
      /></a>
    </div>
  </div>
</template>

<script>
import Packery from "packery";
import imagesLoaded from "imagesloaded";

export default {
  mounted() {
    let imgContainer = document.querySelector('.images-wrapper');
    this.initPackery(imgContainer)
  },
  beforeUpdate() {
    let imgContainer = document.querySelector('.images-wrapper');
    this.initPackery(imgContainer)
  },
  props: ["imageData"],
  name: "VisualProjects",
  componentName: "visual-projects",
  methods: {
    getGutter() {
      if (window.innerWidth <= 900) {
        return 10
      }
      return 20
    },
    getBgImage(item) {
      let path = require("../../assets/images/art/compressed/" + item["img_path"]);
      return path;
    },
    toggleModal(item) {
      document.querySelector("body").style.overflow = "hidden"
      // todo: handle for carousel images
      this.$store.commit("activateImages", [item])
      this.$store.commit("toggleModalOpen")
    },
    packeryObj(imgContainer) {
      const gutter = this.getGutter();
      return new Packery(imgContainer, {
        itemSelector: ".images-item",
        gutter: this.getGutter(),
      });
    },
    initPackery(container) {
      var self = this
      imagesLoaded(container, { background: true }, function () {
        var pckry = self.packeryObj(container)
        self.pckry = pckry
      });
    }
  }
}
</script>

<style lang="sass-loader">
@import '../../assets/styles/main.scss';
.images {
  &-wrapper {
    max-width: 800px;
  }
  &-item {
    width: calc(100% / 3 - 20px);
    height: auto;
    img {
      display: block;
      width: 100%;
    }
  }
  &-image {
    cursor: pointer;
  }
  @include breakpoint(tablet-landscape) {
    &-item {
      width: calc(100% / 3 - 10px);
    }
  }
}
</style>
