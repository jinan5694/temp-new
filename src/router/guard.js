import { NProgress } from '@/plugins/nprogress'

export function beforeEach(to, from, next) {
  console.log(to.path)
  NProgress.start()
  // 是否需要登录后访问
  const isRequiresAuth = to.matched.some(record => record.meta.isRequiresAuth)
  // 是否已登陆
  const token = localStorage.getItem('token')

  // 需要登录但未登录，拦截到登录页
  if (isRequiresAuth && !token) {
    next({ name: 'login' })
    return
  }

  // 已登录并且是登出页，拦截到首页
  if (token && to.path === '/login') {
    next({ name: 'dashboard' })
    return
  }

  next()
}

export function afterEach(to) {
  NProgress.done()
  window.document.title = to.meta.title
}

// 分离请求数据逻辑
