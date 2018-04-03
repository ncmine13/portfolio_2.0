<template>
  <div class="web-section__wrapper wrapper-pad" v-bind:style="{ backgroundColor: colorScheme.background }">
    <web-tab-component :content="section" :key="section.id" v-for="section in copy"></web-tab-component>
  </div>
</template>

<script>
import webContent from '%/data/web-info.json'
import webTabComponent from './WebTabs'
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
    webTabComponent
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
