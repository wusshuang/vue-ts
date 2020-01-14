<!--
 * @Author: hope-light
 * @Date: 2019-06-04 17:11:51
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-18 16:33:03
 * @Description: file content
 -->
<template>
  <div>
    <h1>this is a props page!</h1>
   <child :title="title" @handlePropTitle="handlePropTitle" ref="Child"></child>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  // import Child from '@/components/child.vue'
  const Child = () => import('@/components/child.vue')

  @Component({
    components: {
      Child
    }
  })

  export default class Props extends Vue {
    title: string = 'I am is a parent title !'

    handlePropTitle(title: string): void {
      this.title = title

      const CHILD_EL = this.$refs.Child as HTMLFormElement
      console.log(CHILD_EL.msg)
    }
  }
</script>