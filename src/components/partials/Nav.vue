<template>
  <div class="nav__wrapper wrapper-pad" v-bind:class="{home: home}" v-bind:style="{ backgroundColor: activeBgColor }">
    <nav class="site-width">
      <div :key="item.id" v-for="item in navElements"><router-link :to="item.route">{{ item.title }}</router-link></div>
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
          route: '#',
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
      justify-content: center;
      nav {
        width: 450px;
        justify-content: space-between;
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
        padding: 0 10px;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        letter-spacing: 2px;
        text-decoration: none;
      }
    }
  }
}
</style>
