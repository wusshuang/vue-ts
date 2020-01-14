<!--
 * @Author: hope-light
 * @Date: 2019-10-24 09:42:00
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-24 10:05:54
 * @Description: file content
 -->
<template>
  <div id="nextTick">
    <h1>this is a nextTick page!</h1>
    <div id="title">{{ msg }}</div>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class NextTick extends Vue {
  private msg: string = 'hello'

  private handleClick() {
    this.msg = 'world'
    
    console.log(this.msg, 'this.msg')
    console.log(document.querySelector('#title')!.innerHTML)

    this.$nextTick(() => {
      console.log(document.querySelector('#title')!.innerHTML)
    })
  }
}
</script>