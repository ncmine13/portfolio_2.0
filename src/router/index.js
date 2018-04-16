import Vue from 'vue'
import Router from 'vue-router'
import Art from '%/components/art/Art'
import Web from '%/components/web/Web'
import Insp from '%/components/inspiration/Insp'
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
      path: '/development',
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
