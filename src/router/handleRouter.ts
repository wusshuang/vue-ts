/**
 * @Description: 对路由钩子的一些处理文件
 * @Author: Owen
 * @Date: 2019-06-11 16:57
 */

// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Router from './index'
import { getPageTitle } from '@/utils/robot'

NProgress.configure({ showSpinner: false })
const Login = '/login'

Router.beforeEach((to, from, next): void => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)

  if (!window.token && to.path !== Login) {
    NProgress.done()
    return next(Login)
  }

  if (window.token && to.path === Login) {
    NProgress.done()
    return next('/')
  }

  next()
})

Router.afterEach((to: any, from: any): void => {
  NProgress.done()
})
