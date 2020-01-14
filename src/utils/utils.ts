/*
 * @Author: hope-light
 * @LastEditors: hope-light
 * @Description: 常用的方法集合
 * @Date: 2019-04-28 09:58:55
 * @LastEditTime: 2019-04-28 14:04:20
 */

/**
 * @description: 将一个对象转换成路由参数
 * @param {Object} query
 * @return: String 路由参数
 */
function outputUrl(query: any) {
  if (!isObject(query)) {
    return console.warn('query 必须是一个 Object')
  }

  let url = ''

  for (let key in query) {
    if (query.hasOwnProperty(key)) {
      url += `&${key}=${encodeURIComponent(query[key])}`
    }
  }

  return url.slice(1)
}

/**
 * @description: 判断是否是一个对象
 * @param {any} 需要进行判断的参数
 * @return: Boolean
 */
function isObject(query: any) {
  return Object.prototype.toString.call(query) === '[object Object]'
}

/**
 * @description: 防抖函数
 * @param {any} callback
 * @param {number} 延迟时间
 * @return: void
 */
let timer: number | null

function imageStabilization(callback: any, timeout: number = 300): void {
  clearTimeout(timer || 0)
  timer = setTimeout(() => {
    callback()
    clearTimeout(timer || 0)
    timer = null
  }, timeout)
}

/**
 * @description: 节流函数
 * @param {any} callback
 * @param {number} 延迟时间
 * @return: void
 */
let preTime: number | null = null

function throttle(callback: any, timeout: number = 50): void {
  let currentTime = new Date().getTime()

  if (!preTime) {
    preTime = currentTime
  }

  if (currentTime - preTime > timeout) {
    preTime = null
    callback()
  }
}

export {
  outputUrl,
  isObject,
  imageStabilization
}
