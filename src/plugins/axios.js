import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// import store from '@/store'
import router from '@/router'

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// request interceptor
instance.interceptors.request.use(
  config => {
    // token的处理
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    // 参数序列化
    if (config.method === 'get') {
      // todo qs
    }

    return config
  },
  error => {
    Message({
      showClose: true,
      message: error,
      type: 'error'
    })

    return Promise.reject(error)
  }
)

// response interceptor
instance.interceptors.response.use(
  config => {
    return config.data
  },
  error => {
    switch (error.response.status) {
      case 400:
        // 用户名或密码错误
        break
      case 401:
        // token失效，登出
        router.push({ name: 'login' })
        break
      case 500:
        // 服务异常
        Message.error(error.message)
        break
      default:
        Message.error(error.message)
    }
    return Promise.reject(error.response.data)
  }
)

// plugin register
Vue.use({
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
})

export { instance }
