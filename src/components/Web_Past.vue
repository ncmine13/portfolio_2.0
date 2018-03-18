<template>
  <div class="past__wrapper">
    <div class="past__nav-wrapper">
      <div v-bind:style="{backgroundColor: getBgColor(project)}" v-on:click="toggleActiveProject(project)" :key="project.id" v-for="project in projects">{{ project.title }}</div>
    </div>
    <div class="past__project--wrapper">
      <div class="project" v-bind:id="project.name" v-for="project in projects" :key="project.id" v-bind:class="{ active: isProjectActive(project.id) }">
        <div class="past__project--img"><img :src="getImgUrl(project)" alt=""/></div>
        <div class="past__project--details">
          <div class="stack"><div class="text" v-for="tech in project['stack']" :key="tech.id"> {{ tech }} </div></div>
          <div class="description"> {{ project.description}} </div>
          <div class="links">
            <a class="external-link" href="#">See on github</a>
            <a class="external-link" href="#">View demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Past',
  data () {
    return {
      activeProjectId: 1
    }
  },
  props: ['past'],
  computed: {
    projects () {
      return this.past.projects
    }
  },
  methods: {
    getImgUrl (project) {
      let path = project.image_path
      return require('../assets/' + path + '.png')
    },
    toggleActiveProject (project) {
      this.activeProjectId = project.id
    },
    isProjectActive (id) {
      if (id === this.activeProjectId) return true
    },
    getBgColor (project) {
      return this.isProjectActive(project.id) ? project.nav_color : '#027878'
    }
  }
}
</script>

<style lang="sass-loader">
@import '../assets/styles/main.scss';
.past {
  &__nav-wrapper {
    display: flex;
    justify-content: center;
    & > div {
      padding: 5px 20px;
      width: calc(100% / 3);
      border: 1px solid white;
      text-align: center;
    }
  }
  &__project {
    &--wrapper {
      padding: 20px 0;
      .project {
       display: none;
       &.active {
         display: flex;
       }
      }
    }
    &--img {
      img {
        width: calc(100% - 20px);
      }
    }
    &--details {
      width: calc(100% - 20px);
      .description {
        padding-bottom: 20px;
      }
    }
  }
}
</style>
