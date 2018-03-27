<template>
  <div class="web-tabs__wrapper site-width">
    <web-banner-text :intro="banner"></web-banner-text>
    <div class="web-tabs__nav-wrapper">
      <div v-for="project in projects" v-bind:style="[navStyles(projects), getBgColor(project)]" v-on:click="toggleActiveProject(project)" :key="project.id">{{ project.title }}</div>
    </div>
    <div class="web-tabs__project--wrapper">
      <div class="project" v-bind:id="project.name" v-for="project in projects" :key="project.id" v-bind:class="{active: isProjectActive(project.id)}">
        <div class="web-tabs__project-intro h3-size">{{project.description}}</div>
        <div class="web-tabs__project-details">
          <div class="web-tabs__project-img">
            <img :src="getImgUrl(project)" alt=""/>
          </div>
          <div class="web-tabs__project-text">
            <div class="stack"><div class="text" v-for="tech in project['stack']" :key="tech.id"> {{ tech }} </div></div>
            <div class="links">
              <a class="external-link" href="#">See on github</a>
              <a class="external-link" href="#">View demo</a>
            </div>
          </div>
        </div>
        <div class="web-tabs__project-plans">
          <div v-for="text in project.project_details" :key="text.id">
            <div class="icons">&#x2714</div>
            <div>{{text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webBannerText from '../Web_Banner-Text'
export default {
  name: 'Web_Tabs',
  data () {
    return {
      activeProjectId: 1
    }
  },
  computed: {
    projects () {
      let content = this.content
      return content['projects']
    },
    banner () {
      let content = this.content
      return content['banner_intro']
    }
  },
  methods: {
    toggleActiveProject (project) {
      this.activeProjectId = project.id
    },
    isProjectActive (id) {
      if (id === this.activeProjectId) return true
    },
    getImgUrl (project) {
      let path = project.image_path
      return require('../../assets/' + path + '.png')
    },
    getBgColor (project) {
      // let color = this.isProjectActive(project.id) ? 'rgba(0, 0, 0, 0.6)' : '#027878'
      let color = '#027878'
      let nav = this.isProjectActive(project.id) ? '1px solid white' : 'none'
      return { backgroundColor: color, borderBottom: nav }
    },
    navStyles (projects) {
      let widthStyle = { width: 'calc(100% / ' + projects.length + ')' }
      return widthStyle
    }
  },
  components: {
    webBannerText
  },
  props: ['content']
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';
.icons {
  font-size: 30px;
  padding-bottom: 20px;
}
.web-tabs {
  &__nav-wrapper {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    & > div {
      padding: 5px 20px 10px;
      text-align: center;
    }
  }
  &__project {
    &--wrapper {
      margin-bottom: 200px;
      .project {
       display: none;
       &.active {
         display: block;
       }
      }
    }
  }
  &__project-intro {
    text-align: center;
    padding: 30px 0;
    max-width: 800px;
    margin: 0 auto;
  }
  &__project-img {
    width: 100%;
    img {
      width: calc(100% - 20px);
    }
  }
  &__project-details {
    @include flexbox_aligned;
  }
  &__project-plans {
    display: flex;
    padding-top: 50px;
    & > div {
      width: calc(100% / 3);
      padding: 0 20px;
      text-align: center;
    }
  }
  &__project-text {
    width: calc(100% - 20px);
    height: 200px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}

</style>
