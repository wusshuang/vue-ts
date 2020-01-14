<template>
  <div>
    <h1>this is a provied page!</h1>
    <provied-child :title="title"></provied-child>
  </div>
</template>

<script lang="ts">
  import { Vue, Provide, Component } from 'vue-property-decorator'

  import ProviedChild from '@/components/proviedChild.vue'

  @Component({
    components: {
      ProviedChild
    }
  })

  export default class Props extends Vue {
    title: string = 'I am is a parent title !'

    @Provide() parent = this
  }
</script>