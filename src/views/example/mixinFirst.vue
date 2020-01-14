<template>
  <div id="mixin">
    <h1 >{{ mixinMsg }}</h1>
    <p>{{ value }} --- 组件里面的数据会覆盖混入对象里面的数据</p>
    <Button @click="handleClick">click me !</Button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import FMixin from '@/mixins/first.mixin'
  import { Button } from 'element-ui'

  @Component({
    mixins: [FMixin],
    components: {
      Button
    }
  })

  export default class FirstMixin extends Vue {
    value: string = 'the value in firstMixinMoudle'

    // 同名钩子函数将合并为一个数组
    // 混入对象的钩子优先于组件的钩子
    created() {
      console.log('组件钩子被调用')
    }

    //  两个对象键名冲突时，取组件对象的键值对
    handleClick() {
      console.log('组件方法被调用')
    }
  }
</script>
