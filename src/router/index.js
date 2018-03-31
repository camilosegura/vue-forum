import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import NotFound from '@/pages/PageNotfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
