/*
 * @Author: hope-light
 * @Date: 2019-09-16 16:37:10
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-24 09:47:20
 * @Description: file content
 */
/**
 * @Description: system 模块路由
 * @Author: Owen
 * @Date: 2019-06-11 17:40
 */

export default [
  {
    path: 'iconfont',
    name: 'Iconfont',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/iconfont.vue'),
    meta: {
      title: 'Iconfont'
    }
  },
  {
    path: 'scss',
    name: 'Scss',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/scss.vue'),
    meta: {
      title: 'Scss'
    }
  },
  {
    path: 'request',
    name: 'Request',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/request.vue'),
    meta: {
      title: 'Request'
    }
  },
  {
    path: 'get-vuex',
    name: 'GetVuex',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/getVuex.vue'),
    meta: {
      title: 'GetVuex'
    }
  },
  {
    path: 'set-vuex',
    name: 'SetVuex',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/setVuex.vue'),
    meta: {
      title: 'SetVuex'
    }
  },
  {
    path: 'props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/props.vue'),
    meta: {
      title: 'Props'
    }
  },
  {
    path: 'provied',
    name: 'Provied',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/provied.vue'),
    meta: {
      title: 'Provied'
    }
  },
  {
    path: 'watch',
    name: 'WatchCom',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/watch.vue'),
    meta: {
      title: 'WatchCom'
    }
  },
  {
    path: 'computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/computed.vue'),
    meta: {
      title: 'Computed'
    }
  },
  {
    path: 'v-pre',
    name: 'VPre',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/vPre.vue'),
    meta: {
      title: 'VPre'
    }
  },
  {
    path: 'mixin-first',
    name: 'mixinFirst',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/mixinFirst.vue'),
    meta: {
      title: 'mixinFirst'
    }
  },
  {
    path: 'mixin-second',
    name: 'mixinSecond',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/mixinSecond.vue'),
    meta: {
      title: 'mixinSecond'
    }
  },
  {
    path: 'render',
    name: 'Render',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/render.vue'),
    meta: {
      title: 'Render'
    }
  },
  {
    path: 'ref',
    name: 'Ref',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/ref.vue'),
    meta: {
      title: 'Ref'
    }
  },
  {
    path: 'filter',
    name: 'Filter',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/filter.vue'),
    meta: {
      title: 'filter'
    }
  },
  {
    path: 'directives',
    name: 'Directives',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/directives.vue'),
    meta: {
      title: 'directives'
    }
  },
  {
    path: 'copy-table',
    name: 'CopyTable',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/copyTable.vue'),
    meta: {
      title: 'CopyTable'
    }
  },
  {
    path: 'dynamic-query',
    name: 'DynamicQuery',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/dynamicQuery.vue'),
    meta: {
      title: 'DynamicQuery'
    }
  },
  {
    path: 'next-tick',
    name: 'NextTick',
    component: () => import(/* webpackChunkName: "example" */ '@/views/example/nextTick.vue'),
    meta: {
      title: 'NextTick'
    }
  }
]
