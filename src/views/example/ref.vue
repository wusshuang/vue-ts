<!--
 * @Author: hope-light
 * @Date: 2019-06-12 15:24:09
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-18 16:12:38
 * @Description: file content
 -->
<template>
  <div id="ref">
    <h1 ref="title">this is a ref page !</h1>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component

  export default class Ref extends Vue {
    mounted() {
      const TITLE = this.$refs.title as HTMLElement
      console.log(TITLE, TITLE.children)
    }
  }
</script>
