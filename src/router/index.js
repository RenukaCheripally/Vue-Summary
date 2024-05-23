import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import AutomationView from '@/views/AutomationView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/automations',
      name: 'Automations',
      component: AutomationView
    }
  ]
})
