<template>
  <div id="provied-child">
    <h1>this is a provied child page !</h1>
    <p>{{ parent.title }}</p>
    <Button @click="parent.title = 'new value'">change provied</Button>
  </div>
</template>

<script lang="ts">
  import { Vue, Inject, Component } from 'vue-property-decorator'
  import { Button } from 'element-ui'

  @Component({
    components: {
      Button
    }
  })

  export default class ProviedChild extends Vue {
    @Inject() parent!: any

    created() {
      console.log(this.parent)
    }
  }
</script>