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
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
  // ...
  console.log('beforEach')
  NProgress.start()
  setTimeout(() => {
    console.log('before next')
    next()
  }, 2000)
})
router.afterEach((to, from) => {
  //
  console.log(from)
  NProgress.done()
})

export default router
