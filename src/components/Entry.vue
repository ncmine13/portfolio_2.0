<template>
  <div>
    <div class='entry__wrapper'>
      <img src='../assets/banner2.png'/>
    </div>
    <nav-component></nav-component>
    <!-- <header-component></header-component> -->
    <!-- <art-component></art-component>
    <web-component></web-component>
    <insp-component></insp-component> -->
  </div>
</template>

<script>
import navComponent from './partials/Nav'

import artComponent from './Art'
import webComponent from './Web'
import inspComponent from './Insp'
import headerComponent from './partials/Header'
export default {
  name: 'Entry',
  data () {
    return {}
  },
  components: {
    artComponent,
    inspComponent,
    webComponent,
    headerComponent,
    navComponent
  }
}
</script>
<style lang='sass-loader' scoped>
@import '../assets/variables.scss';

.entry {
  &__wrapper {
    background-color: $yellow;
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
