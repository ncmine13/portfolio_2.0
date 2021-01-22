<template>
  <div class="nav__wrapper wrapper-pad">
    <nav class="site-width">
      <div :key="item.id" v-for="item in navElements" class="nav__elem">
        <router-link v-if="!showShortTitle(item)" :to="item.route">{{ item.title }}</router-link>
        <router-link v-else :to="item.route">{{ item.shortTitle }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      name: 'Naomi Mine',
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
        // {
        //   title: 'Links',
        //   route: '/links'
        // }
      ]
    }
  },
  methods: {
    showShortTitle (item) {
      if (item.title === 'Development') {
        return this.$store.state.showShortenedNav
      }
    }
  }
}
</script>
<style lang='sass-loader'>
@import '../assets/styles/main.scss';
a {
  color: white;
}
.nav {
  &__wrapper {
    @include flexbox(row, flex-start, null);
    width: 100%;
    position: relative;
    &.home {
      nav {
        display: block;
        margin: 0;
        .nav__elem {
          padding: 10px 0;
        }
        a {
          padding: 10px 0;
        }
      }
    }
    &.fixed {
      position: fixed;
      top: 0;
      z-index: 3;
    }
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
    @include breakpoint(tablet-portrait) {
      font-size: 14px;
      &.home {
        nav {
          @include flexbox(row, flex-center, null);
          a {
            padding-right: 15px;
          }
        }
      }
    }
    @include breakpoint(mobile) {
      font-size: 12px;
      nav {
        a {
          padding-right: 10px;
        }
      }
    }
    @include breakpoint(tiny-mobile) {
      font-size: 10px;
    }
  }
}
</style>
