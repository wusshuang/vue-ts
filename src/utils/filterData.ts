/**
 *
 * @Description: 过滤对象中不必要的字段
 * @Author: Owen
 * @Date: 2019-06-12 19:30
 *
 */

import { isObject } from '@/utils/utils'

interface FilterType {
  filter(source: any, rules: any): any
}

/**
 *
 * @description: 数据过滤器
 *
 */

class FilterData implements FilterType {
  /**
   *
   * @description: 过滤函数
   * @param {source: any} 数据源
   * @param {rules: any} 规则
   * @return {}
   *
   */

  public filter(source: any, rules: any): any {
    if (isObject(rules)) {
      for (let key in rules) {
        // 基础类型
        if (
          typeof rules[key] !== 'object' ||
          rules[key] === null
        ) {
          rules[key] = typeof source[key] !== 'undefined' ? source[key] : rules[key]
        } else {
          this.filter(source[key], rules[key])
        }
      }
    } else {
      this.handleArrData(source, rules)

      for (let i = 0, len = rules.length; i < len; i++) {
        let item = rules[i]

        if (
          typeof item !== 'object' &&
          item !== null
        ) {
          item = typeof source[i] !== 'undefined' ? source[i] : item
        } else {
          this.filter(source[i], rules[i])
        }
      }
    }

    return rules
  }

  /**
   *
   * @description: 处理数组类型（自动填充多条）
   * @param {source: any} 数据源
   * @param {rules: any} 规则
   * @return {void}
   *
   */

  private handleArrData(source: any, rules: any): void {
    const length: number = source.length
    const firstItem: any = rules[0] && JSON.parse(JSON.stringify(rules[0])) || null

    rules.length = length
    if (!firstItem) {
      return
    }


    source.forEach((item: any, index: number) => {
      if (index) {
        rules[index] = JSON.parse(JSON.stringify(firstItem))
      }
    })
  }
}

/**
 *
 * @description: 实例化过滤器
 * @param {source: any} 数据源
 * @param {rules: any} 规则
 * @return {} 实例
 *
 */

function create(source: any, rules: any): FilterType {
  let filterData: any =  new FilterData()

  return filterData.filter(source, rules)
}

export default create
