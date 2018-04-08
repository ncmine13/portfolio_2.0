import Vue from 'vue'
import Router from 'vue-router'
import Art from '%/components/art/Art'
import Web from '%/components/web/Web'
import Insp from '%/components/inspiration/Insp'
import ArtProject from '%/components/art/ArtProject'
import CV from '%/components/cv/CV'

Vue.use(Router)

// add artwork child routes
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/artwork',
      component: Art
    },
    {
      path: '/artwork/collecting',
      component: ArtProject,
      alias: ['/artwork/ladies', '/artwork/spacemaking', '/artwork/miscellaneous', '/artwork/plants']
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
    },
    {
      path: '/cv',
      component: CV
    }
  ]
})

export { router }
