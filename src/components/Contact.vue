<template>
  <div class="contact-wrapper site-width">
    <div class="contact-icons">
      <a href="https://www.linkedin.com/in/naomi-mine/" target="_blank"
        ><svgicon icon="linkedin" width="30px" height="34"></svgicon
      ></a>
      <a href="#" target="_blank"
        ><svgicon icon="instagram" height="36"></svgicon
      ></a>
      <a href="#" target="_blank"
        ><svgicon icon="gmail" height="36"></svgicon
      ></a>
    </div>
    <div class="contact-email-address">naomi.mine@gmail.com</div>
  </div>
</template>

<script>
import "../compiled-icons/index";
export default {
  name: "Contact",
};
</script>

<style lang="sass-loader">
@import "../assets/styles/main.scss";
.contact {
  &-wrapper {
    margin: 20px auto;
  }
  &-icons {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  @include breakpoint(tablet-landscape) {
    &-wrapper {
      text-align: center;
    }
    &-icons {
      justify-content: center;
    }
  }
}
a {
  margin-right: 12px;
}
svg {
  fill: white;
}
</style>