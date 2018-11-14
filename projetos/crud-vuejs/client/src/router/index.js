import Vue from 'vue'
import Router from 'vue-router'
import Pessoa from '@/components/Pessoa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pessoa',
      component: Pessoa
    }
  ]
})
