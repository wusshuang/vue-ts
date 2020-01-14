/*
 * @Author: hope-light
 * @LastEditors: hope-light
 * @Description: 网络请求
 * @Date: 2019-04-26 17:33:54
 * @LastEditTime: 2019-04-28 14:50:06
 */

import axios from 'axios'
import { Loading, Message } from 'element-ui'

import { domain, prefix } from '../config/config'
import { outputUrl } from './utils'
import { RequestConfig } from '../types/request.type'

axios.defaults.baseURL = domain + prefix
axios.defaults.timeout = 10000

// let pending: any[] = [] //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let cancelToken = axios.CancelToken
// let removePending = (config: any) => {
//   for (let p in pending) {
//     if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
//       pending[p].f() //执行取消操作
//       pending.splice(+p, 1) //把这条记录从数组中移除
//     }
//   }
// }

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // removePending(config) //在一个ajax发送前执行一下取消操作
  // config.cancelToken = new cancelToken((c)=>{
  //   // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
  //   pending.push({ u: config.url + '&' + config.method, f: c })
  // })

  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  // removePending(response.config)  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error.response || {})
})

/**
 * @description: 关闭加载弹窗
 * @param {Boolean} 判断是否开启了弹窗
 * @param {Object} 弹窗实例
 * @return: void
 */
const closeLoading = (isLoading: boolean = false, loadingInstance: any) => {
  if (isLoading) {
    loadingInstance.close()
  }
}

/**
 * @description: 网络请求
 *                url: 路由地址 必填
 *                query: 路由参数 非必填
 *                body: 提交主体 非必填
 *                isLoading: 是否需要加载窗 非必填
 *                isToken: 是否需要 token 验证
 * @return: Object 返回一个 Promise 对象
 */
export default (body: RequestConfig) => {
  let { method = 'get', url, query, isLoading = true, isToken = true } = body

  if (!url) {
    return Promise.reject(new Error('url 不能为空'))
  }

  let loadingInstance: any

  if (isToken) {
    if (window.token) {
      axios.defaults.headers.Authorization = window.token
    } else {
      Message.warning('登入超时，请重新登入！')
      return Promise.reject(new Error('登入超时，请重新登入！'))
    }
  } else {
    delete axios.defaults.headers.Authorization
  }

  if (isLoading) {
    loadingInstance = Loading.service({})
  }

  if (!body.body || !Object.keys(body.body).length) {
    url += '?' + outputUrl(query || {})
  }

  return (
    new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data: body.body || {}
      })
        .then(body => {
          closeLoading(isLoading, loadingInstance)

          resolve(body)
        })
        .catch(fail => {
          closeLoading(isLoading, loadingInstance)

          switch (fail.status) {
            case 401 :
              return Message.error('登人超时，请重新登入')
            default:
              return Message.error(fail.data.message || '系统维护中，请稍后再试！')
          }

          // reject(fail)
        })
    })
  )
}
