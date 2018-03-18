<template>
  <div class="current__wrapper">
      <!-- <div class="h2-size">Current Projects</div> -->
      <div class="current__projects-wrapper">
      <div class="project" v-for="project in current" :key="project.id">
        <div class="current__two-up" v-bind:class="{reorder: project.id % 2 === 0}">
          <div class="h2-size">{{ project.headline }}</div>
          <div class="stack"><div class="text" v-for="tech in project['stack']" :key="tech.id"> {{ tech }} </div></div>
          <p> {{ project.description_intro }} <span> {{ project.description_extension }} </span></p>
          <div>read more...</div>
          <div class="links">
            <a class="external-link" href="#">See on github</a>
            <a class="external-link" href="#">View demo</a>
          </div>
        </div>
        <div class="current__two-up">
          <div class="visual"><img src="../assets/mock_diagram.png"/></div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Current',
  data () {
    return {

    }
  },
  props: ['current']
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/main.scss';
.reorder {
  order: 2
}
.current {
  &__projects-wrapper {
    .project {
      display: flex;
      margin: 40px 0 120px 0;
    }
    .visual {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  &__two-up {
    width: calc(50% - 30px);
    margin-right: 30px;
    p {
      padding: 15px 0;
    }
    .links {
      @include flexbox_standard;
      justify-content: flex-start;
      padding-top: 20px;
      a {
        font-size: 14px;
        color: white;
        margin-right: 40px;
      }
    }
  }
}
</style>
