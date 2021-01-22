<template>
  <div class="nav-wrapper wrapper-pad">
    <nav>
      <div :key="item.id" v-for="item in navElements" class="nav-elem">
        <router-link class="nav-link" :to="item.route">{{ item.title }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navElements: [
        {
          title: 'Projects',
          route: '/projects',
        },
        {
          title: 'Contact',
          route: '/contact',
        },
        {
          title: 'Resume',
          route: '/resume',
        },
      ]
    }
  }
}
</script>

<style lang='sass-loader'>
@import '../assets/styles/main.scss';
.nav {
  &-link {
    font-size: 20px;
  }
  &-wrapper {
    .router-link-active {
      color: black;
    }
    @include flexbox(row, flex-start, null);
    width: 100%;
    position: relative;
    nav {
      display: flex;
      justify-content: center;
      width: 100%;
      a {
        padding-right: 20px;
        letter-spacing: 2px;
        text-decoration: none;
      }
    }
  }
  @include breakpoint(tablet-landscape) {
    &-link {
      font-size: 16px;
    }
  }
  @include breakpoint(mobile) {
    &-link {
      font-size: 14px;
    }
    nav {
      a {
        padding-right: 10px;
      }
    }
  }
  @include breakpoint(tiny-mobile) {
    &-link {
      /* font-size: 10px; */
    }
  }
}
</style>
