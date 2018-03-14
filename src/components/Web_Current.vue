<template>
  <div class="current__wrapper">
      <div class="h3-size">Current Projects</div>
      <div class="current__projects-wrapper">
      <div class="project" v-for="project in current" :key="project.id">
        <div class="current__two-up">
          <h2>{{ project.headline }}</h2>
          <p> {{ project.description_intro }} <span> {{ project.description_extension }} </span></p>
          <div>read more...</div>
        </div>
        <div class="current__two-up">
          <div class="stack"><div class="text" v-for="tech in project['stack']" :key="tech.id"> {{ tech }} </div></div>
          <div class="visual"><img src="../assets/mock_diagram.png"/></div>
          <div class="links">
            <a href="#">See code github</a>
            <a href="#">View demo</a>
          </div>
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

.current {
  &__projects-wrapper {
    .project {
      display: flex;
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
    .stack {
      display: flex;
      flex-wrap: wrap;
      text-transform: uppercase;
      & > div {
        margin-right: 10px;
      }
    }
  }
}
</style>
