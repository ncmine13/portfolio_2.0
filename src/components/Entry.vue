<template>
  <div>
    <art-component></art-component>
    <web-component></web-component>
    <insp-component></insp-component>
  </div>
</template>

<script>
import artComponent from './Art'
import webComponent from './Web'
import inspComponent from './Insp'
export default {
  name: 'Entry',
  data () {
    return {
    }
  },
  components: {
    artComponent, inspComponent, webComponent
  }
}
</script>
<style lang="sass-loader" scoped>

</style>
