/*
 * @Author: hope-light
 * @LastEditors: hope-light
 * @Description: 全局的网络 api 接口, 方便管理
 * @Date: 2019-04-29 15:46:09
 * @LastEditTime: 2019-04-29 16:21:12
 */
interface Api {
  [propName: string]: any; // 对象中的每个字段都为 string 类型 或者 string 的子类型
}


// 区分模块
const basicModule: Api = {
  "cloth": 'cloth',
  "fabric-weight": 'fabric-weight'
}

export {
  basicModule
}
