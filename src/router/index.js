import Vue from 'vue'
import Router from 'vue-router'
import Art from '%/components/art/Art'
import Web from '%/components/web/Web'
import Insp from '%/components/inspiration/Insp'
import ArtProject from '%/components/art/ArtProject'

Vue.use(Router)

// add artwork child routes
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/artwork',
      name: 'Art',
      component: Art
    },
    {
      path: '/artwork/:route',
      component: ArtProject
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

export { router }
