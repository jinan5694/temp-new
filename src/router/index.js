import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { NProgress } from '@/plugins/nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
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
