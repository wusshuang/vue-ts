<!--
 * @Author: hope-light
 * @Date: 2019-10-18 16:37:13
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-24 09:45:29
 * @Description: file content
 -->

<template>
  <div id="dynamic-query">
    <h1>动态参数</h1>
    <input type="text" v-model="obj.msg">
    <Button v-bind:[dynamicQueryText1]="dynamicQueryText1" @click="handleDynamicQueryText1">v-bind {{ dynamicQueryText1 }}</Button>
    <div>动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。<br />变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</div>
    <Button v-bind:[getAtter]="dynamicQueryText1" @click="handleDynamicQueryText1">v-bind</Button>
    <hr>
    <Button v-on:[dynamicQueryEvent]="doSometing">v-on</Button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class DynamicQuery extends Vue {
  private dynamicQueryText1: string = 'text1'
  private dynamicQueryEvent: string = 'click'
  private obj: any = {}

  get getAtter(): string {
    return 'a' + this.dynamicQueryText1
  }

  private created() {
    // 此种情况页面改变了，vue 里面的数据不会改变
    this.obj.msg = 'jj'
  }

  private handleDynamicQueryText1(): void {
    Math.random() > .5
    ? this.dynamicQueryText1 = 'hello'
    : this.dynamicQueryText1 = 'word'
  }

  private doSometing(): void {
    console.log('doSometing')
    Math.random() > .5
    ? this.dynamicQueryEvent = 'mouseenter'
    : this.dynamicQueryEvent = 'click'
  }
}
</script>