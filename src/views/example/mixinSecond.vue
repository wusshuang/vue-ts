<template>
  <div id="mixin">
    <h1 >{{ mixinMsg }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Mixins } from 'vue-property-decorator'
  import SMixin from '@/mixins/second.mixin'

  @Component

  export default class SecondMixin extends Mixins(SMixin) {


  }
</script>
