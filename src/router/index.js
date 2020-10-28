import Vue from 'vue'
import VueRouter from 'vue-router'
import { NProgress } from '@/plugins/nprogress'
import { guardAuth } from './guard'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: 'systemUser',
        component: () => import('@/views/system/user/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    ...guardAuth()
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
