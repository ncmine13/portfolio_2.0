import Vue from 'vue'
import Router from 'vue-router'

import Contact from '%/components/Contact'
import Home from '%/components/Home'
import Project from '%/components/projects/Project'
import Resume from '%/components/Resume'

import { store } from '../store/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Project,
    },
    {
      path: '/resume',
      component: Resume,
    },
    {
      path: '/contact',
      component: Contact,
    }
  ]
})

router.afterEach((to, from) => {
  if (to.path === '/projects' && to.hash !== '#') {
    store.commit('changeActiveProjectCat', to.hash.substring(1))
  }
})

export { router }
