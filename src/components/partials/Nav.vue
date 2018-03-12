<template>
  <div class="nav__wrapper" v-bind:style="{backgroundColor: activeBgColor}">
    <nav>
      <div><router-link :key="item.id" v-for="item in navElements" :to="item.route">{{ item.title }}</router-link></div>
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
  watch: {
    $route (to, from) {
      if (this.$route.fullPath === '/') {
        this.$store.commit('alterNavColor', '#FDB632')
      }
    }
  },
  computed: {
    activeBgColor: function () {
      return this.$store.state.navBgColor
    }
  }
}
</script>
<style lang='sass-loader'>
@import '../../assets/variables.scss';

.nav {
  &__wrapper {
    /* background-color: $yellow; */
    display: flex;
    justify-content: center;
    nav {
      display: flex;
      justify-content: space-between;
      width: 450px;
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
