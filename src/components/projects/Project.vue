<template>
  <div class="site-width project">
    <project-nav></project-nav>
    <div class="project-content">
      <music v-if="isMusic"></music>
      <statement v-if="activeProjectCategory === ''"></statement>
      <visual-projects v-if="isArt" :imageData="activeDataSet"></visual-projects>
      <!-- <web v-if="activeProjectCategory === 'web'"></web> -->
      <modal></modal>
    </div>
  </div>
</template>

<script>
import projectNav from "./ProjectNav";
import statement from "./Statement";
import visualProjects from "./VisualProjects";
import modal from "./Modal.vue";
import music from "./Music.vue";
import web from "./Web.vue";

import collageData from "../../data/collage.json";
import drawPaintData from "../../data/drawing.json";
import plantData from "../../data/plants.json"
import threeData from "../../data/threeD.json"

export default {
  name: 'Project',
  components: {
    projectNav,
    statement,
    visualProjects,
    modal,
    music,
    web
  },
  data() {
    return {
      collageData: collageData,
      drawPaintData: drawPaintData,
      plantData: plantData
    };
  },
  computed: {
    activeProjectCategory() {
      return this.$store.state.activeProjectCat
    },
    isArt() {
      const cat = this.$store.state.activeProjectCat
      return cat === 'collage' || cat === 'drawings' || cat === 'plants' || cat === 'threeD'
    },
    isMusic() {
      return this.$store.state.activeProjectCat === 'music'
    },
    activeDataSet() {
      if (this.$store.state.activeProjectCat === 'collage') {
        return collageData
      }
      if (this.$store.state.activeProjectCat === 'drawings') {
        return drawPaintData
      }
      if (this.$store.state.activeProjectCat === 'plants') {
        return plantData
      }
      if (this.$store.state.activeProjectCat === 'threeD') {
        return threeData
      }
    }
  }
};
</script>

<style lang="sass-loader">
@import '../../assets/styles/main.scss';
    .project {
      display: flex;
      margin-top: 20px;
      &-content {
          width: 75%;
      }
      @include breakpoint(tablet-landscape) {
        flex-direction: column;
        &-content {
          width: 100%;
        }
      }
    }
</style>
