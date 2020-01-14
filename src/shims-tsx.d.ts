/*
 * @Author: hope-light
 * @Date: 2019-06-17 11:27:38
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-18 16:31:50
 * @Description: file content
 */
import Vue, { VNode } from 'vue';
import {RequestConfig} from '@/types/request.type';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    //
    interface Vue {
      mixinMsg: string
      value: string
    }
  }
  // 给 Window 添加全局属性
  interface Window {
    token: string | null
    app: any
    $filterData: (source: any, rules: any) => any
    $request: (config: RequestConfig) => any
    $imageStabilization: (callback: any, timeout?: number) => any
  }
}
