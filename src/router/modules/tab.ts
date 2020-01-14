/**
 * @Description: system 模块路由
 * @Author: Owen
 * @Date: 2019-06-11 17:40
 */

export default [
    {
        path: 'a',
        name: 'A',
        component: () => import(/* webpackChunkName: "tab" */ '@/views/tab/a.vue'),
        meta: {
            title: 'A'
        }
    },
    {
        path: 'b',
        name: 'B',
        component: () => import(/* webpackChunkName: "tab" */ '@/views/tab/b.vue'),
        meta: {
            title: 'B'
        }
    }
]
