<template>
  <div>

    <!-- <art-component></art-component>
    <web-component></web-component>
    <insp-component></insp-component> -->
  </div>
</template>

<script>
import navComponent from './partials/Nav'
import headerComponent from './partials/Header'
import artComponent from './art/Art'
import webComponent from './Web'
import inspComponent from './Insp'

export default {
  name: 'Entry',
  data () {
    return {}
  },
  computed: {
    hpViewActive () {
      return this.$store.state.homeView
    }
  },
  components: {
    headerComponent,
    navComponent,
    artComponent,
    webComponent,
    inspComponent
  }
}
</script>
<style lang='sass-loader' scoped>
@import '../assets/variables.scss';

.entry {
  &__wrapper {
    /* background-color: $yellow; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    img {
      width: 450px;
    }
  }
}
</style>
