import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import AutomationView from '@/views/AutomationView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/',
      name: 'Automations',
      component: AutomationView
    }
  ]
})
