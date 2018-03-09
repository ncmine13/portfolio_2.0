import Vue from 'vue'
import Router from 'vue-router'
import Entry from '%/components/Entry'
import Art from '%/components/Art'
import Web from '%/components/Web'
import Insp from '%/components/Insp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/artwork',
      name: 'Art',
      component: Art
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/inspiration',
      name: 'Inspiration',
      component: Insp
    }
  ]
})
