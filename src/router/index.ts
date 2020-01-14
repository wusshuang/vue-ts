import Vue from 'vue'
import VueRouter from 'vue-router'

import exampleChildRouter from './modules/exmple'
import tabRouter from './modules/tab'

Vue.use(VueRouter)

const DefaultLayout = () => import(/* webpackChunkName: "index" */ '../layout/index.vue')
const PrintLayout = () => import(/* webpackChunkName: "print" */ '../layout/print.vue')

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "index" */ '../views/home.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: 'example',
          name: 'example',
          component: () => import(/* webpackChunkName: "example" */ '../views/example/index.vue'),
          children: exampleChildRouter
        },
        {
          path: 'tab',
          name: 'tab',
          component: () => import(/* webpackChunkName: "tab" */ '../views/tab/index.vue'),
          children: tabRouter
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
          meta: {
            title: 'About'
          }
        }
      ]
    },
    {
        path: '/print',
        component: PrintLayout,
        children: [
            {
                path: '',
                name: 'PrintDefault',
                component: () => import(/* webpackChunkName: "print" */ '../views/print/default.vue'),
            }
        ]
    },
    {
        path: '/echarts',
        component: DefaultLayout,
        children: [
            {
                path: 'line-chart',
                name: 'LineChart',
                component: () => import(/* webpackChunkName: "echarts" */ '../views/echarts/basicLine-chart.vue'),
            },
            {
                path: 'force-layout',
                name: 'ForceLayout',
                component: () => import(/* webpackChunkName: "echarts" */ '../views/echarts/force-layout.vue'),
            }
        ]
    },
    {
      path: '/root',
      name: 'Root',
      component: () => import(/* webpackChunkName: "root" */ '../views/root.vue'),
      meta: {
        title: 'Root'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "notFound" */ '../views/notFound.vue'),
      meta: {
        title: 'NotFound'
      }
    }
  ]
const Router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: 'hope-light',
  routes
})

export default Router
