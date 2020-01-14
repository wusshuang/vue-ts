<template>
  <div id="child">
    <h1>{{ msg }}</h1>
    <Button @click="handlePropTitle">修改父组件传递的 - title</Button> ---- {{ title }}
  </div>
</template>

<script lang="ts">
  import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
  import { Button } from 'element-ui'

  @Component({
    components: {
      Button
    }
  })

  export default class Child extends Vue {
    @Prop(String) title!: string

    msg: string = 'this is a child component !'

    @Emit('handlePropTitle')
    handlePropTitle(): string {
      return 'this is a prop change title !'
    }
  }
</script>