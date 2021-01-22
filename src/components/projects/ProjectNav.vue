<template>
  <div class="project-nav">
    <div class="project-category">
      <router-link
        :to="{ path: '#collage' }"
        v-bind:class="{ activeCat: activeCat === 'collage' }"
        >collage</router-link
      >
    </div>
    <div class="project-category">
      <router-link
        :to="{ path: '#drawings' }"
        v-bind:class="{ activeCat: activeCat === 'drawings' }"
        >drawing/painting</router-link
      >
    </div>
    <div class="project-category">
      <router-link
        :to="{ path: '#plants' }"
        v-bind:class="{ activeCat: activeCat === 'plants' }"
        >plants</router-link
      >
    </div>
    <div class="project-category">
      <router-link
        :to="{ path: '#threeD' }"
        v-bind:class="{ activeCat: activeCat === 'threeD' }"
        >threeD</router-link
      >
    </div>
    <div class="project-category">
      <router-link
        :to="{ path: '#music' }"
        v-bind:class="{ activeCat: activeCat === 'music' }"
        >music</router-link
      >
    </div>
    <div class="project-category">
      <router-link
        :to="{ path: '#web' }"
        v-bind:class="{ activeCat: activeCat === 'web' }"
        >web</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectNav",
  computed: {
    activeCat() {
      return this.$store.state.activeProjectCat;
    },
  },
};
</script>

<style lang="sass-loader">
@import '../../assets/styles/main.scss';
.project {
  &-category {
    padding-bottom: 8px;
    font-size: 20px;
  }
  &-nav {
    width: 25%;
  }
  @include breakpoint(tablet-landscape) {
    &-category {
      margin: 0 8px 20px 8px;
      padding-bottom: 4px;
      font-size: 20px;
    }
    &-nav {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  @include breakpoint(tablet-portrait) {
    &-category {
      margin: 0 8px;
      font-size: 18px;
    }
    &-nav {
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
  }
  @include breakpoint(tablet-portrait) {
    &-category {
      font-size: 14px;
    }
    &-nav {
      margin-bottom: 15px;
    }
  }
}
.activeCat {
  font-weight: bold;
}
</style>
