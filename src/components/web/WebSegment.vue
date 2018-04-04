<template>
  <div class="segment__wrapper">
    {{segment.name}}
  </div>
</template>

<script>
export default {
  name: 'WebSegment',
  data () {
    return {

    }
  },
  methods: {
    activateSection () {
      console.log('active')
    }
  },
  props: ['segment']
}
</script>

<style lang="sass-loader" scoped>
  .segment {
    &__wrapper {
      display: none;
      &.active {
        display: block;
      }
    }
    &__name {
      cursor: pointer;
    }
  }

</style>
