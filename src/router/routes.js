//

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
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
  {
    path: '/',
    component: () => import('@/layouts/basic-layout.vue'),
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
      {
        path: 'systemUser',
        component: () => import('@/views/system/user/index.vue')
      },
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
