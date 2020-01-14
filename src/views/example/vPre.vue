<template>
  <div id="v-pre">
    <h1>this is a v-pre page !</h1>
    <p v-pre>{{ msg }}</p>
    <p>v-pre 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</p>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component

  export default class VPre extends Vue {
  }
</script>

<style lang="scss">
</style>