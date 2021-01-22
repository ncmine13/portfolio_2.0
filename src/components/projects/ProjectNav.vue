<template>
  <div class="project-nav">
    <div class="project-category"><router-link :to="{path: '#collage'}" v-bind:class="{activeCat: activeCat === 'collage'}">collage/assemblage</router-link></div>
    <div class="project-category"><router-link :to="{path: '#drawings'}" v-bind:class="{activeCat: activeCat === 'drawings'}">drawing/painting</router-link></div>
    <div class="project-category"><router-link :to="{path: '#plants'}" v-bind:class="{activeCat: activeCat === 'plants'}">plants</router-link></div>
    <div class="project-category"><router-link :to="{path: '#threeD'}" v-bind:class="{activeCat: activeCat === 'threeD'}">three-D</router-link></div>
    <div class="project-category"><router-link :to="{path: '#music'}" v-bind:class="{activeCat: activeCat === 'music'}">music</router-link></div>
    <div class="project-category"><router-link :to="{path: '#web'}" v-bind:class="{activeCat: activeCat === 'web'}">web</router-link></div>
  </div>
</template>

<script>
export default {
    name: 'ProjectNav',
    computed: {
        activeCat () {
            return this.$store.state.activeProjectCat
        }
    }
}
</script>

<style lang="sass-loader">
    .project {
        &-category {
            padding-bottom: 8px;
            font-size: 20px;
        }
        &-nav {
            width: 25%;
        }
    }
    .activeCat {
        font-weight: bold;
    }
</style>
