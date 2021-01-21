<template>
  <div class="landing-wrapper">
    <div class="flex-wrapper">
      <img :src="getAltImage()" />
      <div>
        <div class="par">I am Naomi Mine and I live in Chicago.</div>
        <div class="par">
          I write software for the
          <a class="direct-link" href="/projects">web</a> and create multimedia
          <a class="direct-link" href="/projects">art</a>.
        </div>
        <div class="par">
          If you're interested in collaborating on a project, email me at
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

.landing-wrapper {
  max-width: 1000px;
  margin: 0px auto;
  font-size: 20px;
}
.par {
  margin-bottom: 20px;
}
.direct-link {
  font-weight: bold;
}
img {
  width: 500px;
  margin-right: 20px;
}
.image-wrapper {
  text-align: center;
  margin-bottom: 40px;
}
.flex-wrapper {
  display: flex;
  align-items: flex-end;
}
</style>