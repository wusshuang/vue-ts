<template>
  <div id="scss">
    <h1>this is a scss page !</h1>
    <p class="content">m-border('top')</p>
    theme --- {{ theme }}
    <Button type="primary" :style="{background: theme}" @click="theme = '#00FF00'">Javascript和Sass之间共享变量</Button>
    <a href="https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass">Javascript和Sass之间共享变量</a>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Button } from 'element-ui'
  // @ts-ignore
  import variables from '@/assets/css/element-theme.scss'

  @Component({
      components: {
          Button
      }
  })

  export default class Sucss extends Vue {
      theme: string = variables.theme
  }

</script>

<style lang="scss" scoped>
  .content {
    color: $m-text-color;
    @include m-border('top');
  }
</style>
