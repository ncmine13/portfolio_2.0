<template>
  <div class="project">
    <project-nav></project-nav>
    <div class="project-content">
      <statement v-if="activeProjectCategory === ''"></statement>
      <visual-projects v-else :imageData="activeDataSet"></visual-projects>
      <modal></modal>
    </div>
  </div>
</template>

<script>
import projectNav from "./ProjectNav";
import statement from "./Statement";
import visualProjects from "./VisualProjects";
import collageData from "../../data/collage.json";
import drawPaintData from "../../data/drawing.json";
import modal from "./Modal.vue";

export default {
  name: 'Project',
  components: {
    projectNav,
    statement,
    visualProjects,
    modal,
  },
  data() {
    return {
      collageData: collageData,
      drawPaintData: drawPaintData,
    };
  },
  computed: {
    activeProjectCategory() {
      return this.$store.state.activeProjectCat
    },
    activeDataSet() {
      if (this.$store.state.activeProjectCat === 'collage') {
        return collageData
      }
      if (this.$store.state.activeProjectCat === 'drawings') {
        return drawPaintData
      }
    }
  }
};
</script>

<style lang="sass-loader">
    .project {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
    &-content {
        width: 75%;
    }
    }
</style>
