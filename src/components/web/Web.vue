<template>
  <div class="web-section__wrapper" v-bind:style="{ backgroundColor: colorScheme.background }">
    <!-- <web-tab-component :content="section" :key="section.id" v-for="section in copy"></web-tab-component> -->
    <web-project></web-project>
  </div>
</template>

<script>
import webContent from '%/data/web-info.json'
// import webTabComponent from './WebTabs'
import webProject from './WebProject'
export default {
  beforeMount () {
    this.$store.commit('toggleHomeView', false)
  },
  name: 'Web',
  data () {
    return {
      msg: 'Web',
      copy: webContent,
      colorScheme: this.$store.state.activeColorScheme
    }
  },
  components: {
    // webTabComponent,
    webProject
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.web-section {
  &__wrapper {
    color: white;
    /* padding: 20px; */
    .blurb {
      width: 85%;
      padding: 2rem 0;
    }
  }
}
</style>
