<template>
  <div class="project__projects-wrapper wrapper-pad">
    <div class="project__project-wrapper two-by-two" v-for="project in projects" :key="project.id">
      <div class="project__project-image" v-bind:style="{ backgroundImage: getBgImage(project) }">
        <div class="project__image-overlay">
          <div class="project__title h3-size wrapper-pad"> {{ project.title }} </div>
          <div class="stack wrapper-pad">
            <div v-for="item in project.stack" :key="item.id">{{item}}</div>
          </div>
          <div class="wrapper-pad">
            <div class="button">view on github</div>
          </div>
        </div>
      </div>
      <div class="project__description"> {{ project.description }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebProject',
  props: [
    'projects'
  ],
  methods: {
    getBgImage (project) {
      let path = require('../../assets/' + project.img_path)
      let image = 'url(' + path + ')'
      return image
    }
  }
}
</script>

<style lang="sass-loader" scoped>
  @import "../../assets/styles/main.scss";
  .project {
    &__projects-wrapper {
      display: flex;
    }
    &__project-image {
      height: 50vh;
      position: relative;
    }
    &__image-overlay {
      position: absolute;
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      padding: 20px;
      background-color: rgba(1, 58, 58, 0.8);
      .stack {
        & > div {
          background-color: rgb(187, 135, 39);
        }
      }
      .button {
        cursor: pointer;
        border: 1px solid white;
        border-radius: 3px;
        z-index: 0;
        padding: 10px 30px;
        width: max-content;
        transition: 0.2s all;
        &:hover {
          background-color: $orange;
        }
      }
      &:hover {
        .button {
          transform: translate(10px);
        }
      }
    }
    &__description {
      padding: 20px 0;
      line-height: 1.4;
    }
    @include breakpoint(tablet-portrait) {
      &__projects-wrapper {
        flex-direction: column;
      }
      &__project-wrapper {
        width: 100%;
      }
    }
  }
</style>
