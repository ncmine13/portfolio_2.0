<template>
  <div class="landing-wrapper">
    <div class="landing-flex-wrapper">
      <img class="landing-image" :src="getAltImage()" />
      <div class="landing-text-wrapper">
        <div class="landing-par">I am Naomi Mine and I live in Chicago.</div>
        <div class="landing-par">
          If you're interested in collaborating, email me at
          <a class="direct-link"> naomi.mine@gmail.com</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    getAltImage() {
      let path = require("../assets/banner.png");
      return path;
    },
  },
};
</script>

<style lang="sass-loader">
@import "../assets/styles/main.scss";

.landing {
  &-wrapper {
    max-width: 1000px;
    margin: 0px auto;
    font-size: 20px;
  }
  &-flex-wrapper {
    display: flex;
    align-items: flex-end;
  }
  &-image {
    width: 500px;
    margin-right: 20px;
  }
  &-par {
    margin-bottom: 20px;
  }
  @include breakpoint(tablet-landscape) {
    &-flex-wrapper {
      flex-direction: column;
      align-items: center;
    }
    &-text-wrapper {
      max-width: 500px;
      margin-top: 20px;
      font-size: 18px;
    }
    &-image {
      margin-right: 0;
    }
  }
  @include breakpoint(mobile) {
    &-image {
      width: 300px;
    }
    &-text-wrapper {
      max-width: 300px;
      font-size: 16px;
    }
  }
}
.direct-link {
  font-weight: bold;
}
</style>
