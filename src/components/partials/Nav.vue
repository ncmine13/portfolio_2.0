<template>
  <div class="nav__wrapper wrapper-pad" v-bind:class="{home: home}" v-bind:style="{ backgroundColor: activeBgColor }">
    <nav class="site-width">
      <div :key="item.id" v-for="item in navElements" class="nav__elem"><router-link :to="item.route">{{ item.title }}</router-link></div>
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
          title: 'Web',
          route: '/web',
          color: '#027878'
        },
        {
          title: 'Art',
          route: '/artwork',
          color: '#FDB632'
        },
        {
          title: 'CV',
          route: '/cv',
          color: 'black'
        },
        {
          title: 'Inspiration',
          route: '/inspiration',
          color: '#801638'
        }
      ]
    }
  },
  computed: {
    activeBgColor () {
      return this.$store.state.navStuck ? this.$store.state.activeColorScheme.navFixed : this.$store.state.activeColorScheme.background
    },
    home () {
      return this.$store.state.homeView
    }
  }
}
</script>
<style lang='sass-loader'>
@import '../../assets/styles/main.scss';

.nav {
  &__wrapper {
    display: flex;
    justify-content: flex-start;
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
      width: 100%;
      a {
        padding-right: 20px;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        letter-spacing: 2px;
        text-decoration: none;
      }
    }
    @include breakpoint(tablet-portrait) {
      font-size: 14px;
      &.home {
        nav {
          display: flex;
          justify-content: space-between;
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
  }
}
</style>
