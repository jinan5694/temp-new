// 基本的路由配置
import autoRegisteredRoutes from '@/router/auto-register'
import { initDataGuard } from './guard'

const routes = [
  // 无layout的页面
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    beforeEnter: initDataGuard
  },
  // user-layout
  {
    path: '/user',
    component: () => import('@/layouts/user-layout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'Login' }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/register')
      }
    ]
  },
  // basic-layout
  {
    path: '/',
    component: () => import('@/layouts/basic-layout.vue'),
    beforeEnter: initDataGuard,
    meta: {
      isRequiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: { name: 'dashboard' }
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      ...autoRegisteredRoutes,
      {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/page-not-found.vue'),
        meta: {
          title: { i18n: 'route.notFound' }
        }
      }
    ]
  }
]

export { routes }
