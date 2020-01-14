import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/element-theme.scss'

import '@/router/handleRouter'
import * as filters from './filters'
// import request from '@/assets/js/request.ts'
// 延迟加载和代码拆分
// 延迟加载就是延迟加载应用程序的部分内容。换句话说——只在真正需要它们时加载它们。
// 代码拆分是指将应用程序拆分成可以延迟加载的块
const request = () => import('@/./utils/request')
import { imageStabilization } from '@/./utils/utils'
const filterData = () => import('@/utils/filterData')

// Vue.prototype.$request = request
request()
  .then(body => {
      window.$request = body.default
    }
  )
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  // @ts-ignore
  Vue.filter(key, filters[key])
})

window.token = localStorage.getItem('token')
window.$imageStabilization = imageStabilization
filterData()
  .then(body => {
      window.$filterData = body.default
      console.log(window.$filterData(
        {
          user: {
            name: 'Tom',
            age: 12
          },
          user_id: 12,
          body: {
            id: 2,
            title: 'banner',
            price: 4.99
          },
          detail: [
            {
              news: {
                title: '水果特价'
              },
              news_id: 12,
              child_detail: [
                {
                  news: {
                    title: '🍌'
                  },
                  news_id: 15
                },
                {
                  news: {
                    title: '🍌'
                  },
                  news_id: 16
                }
              ]
            },
            {
              news: {
                title: '水果比肉贵'
              },
              news_id: 13,
              child_detail: []
            }
          ]
        },
        {
          user_id: null,
          body: {
            id: null,
            title: ''
          },
          detail: [
            {
              news_id: null,
              child_detail: [
                {
                  news_id: null
                }
              ]
            }
          ]
        }
      ))

      console.log(window.$filterData(
        [
          {
            user: {name: 'Tom'},
            user_id: 1,
            child: []
          },
          {
            user: {name: 'King'},
            user_id: 2,
            child: [
              {
                child_user: {name: 'hh'},
                child_user_id: 4
              },
              {
                child_user: {name: 'hh'},
                child_user_id: 5
              }
            ]
          }
        ],
        [
          {
            user_id: null,
            child: [
              {
                child_user_id: null
              }
            ]
          }
        ]
      ))
    }
  )

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
