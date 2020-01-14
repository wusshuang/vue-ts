<template>
  <div id="request">
    <Button @click="handleRequest('get')">get</Button>
    <Button @click="handleRequest('post')">post</Button>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator"
  import {
    Button
  } from 'element-ui'
  import { basicModule } from '@/config/api'

  @Component({
    components: {
      Button
    }
  })

  export default class Request extends Vue {
    handleRequest(this: any, type: string) {
      // let that: any = this as any
      // this.$request
      // Property '$request' does not exist on type 'Index'.
      // https://blog.csdn.net/u010564430/article/details/54096848
      window.$imageStabilization(() => {
        switch (type) {
          case 'get':
            window.$request({
              url: basicModule.cloth,
              query: {
                page: 1,
                per_page: 10
              }
            })
              .then((body: any) => {
                console.log(body)
              })
              .catch((fail: any) => {
                console.log(fail)
              })
            break
          case 'post':
            // 指定域名的请求
            // basicModule['fabricWeight'] 不能通过驼峰的方式访问 （object access via string literals is disallowed）
            window.$request({
              method: 'post',
              url: `https://cloth-api.szhibu.com/api/${basicModule['fabric-weight']}`,
              body: {
                code: 'WT430',
                name: '10g/㎡',
                name_en: '10g/㎡',
                remark: '',
                goods_type: 0,
                component_ratio: 0
              }
            })
              .then((body: any) => {
                console.log(body)
              })
              .catch((fail: any) => {
                console.log(fail)
              })
            break
          default:
            break
        }
      })

    }
  }
</script>
