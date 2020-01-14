<template>
  <div id="vuex">
    <h2>this is a get-vuex page !</h2>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator'
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'
  import TestModule from '@/store/modules/test'
  
  const testModule = namespace('test')
  
  @Component
  
  export default class GetVuex extends Vue {
    @State('rootMessage') rootMessage!: string
    @State(state => state.rootMessage) stateRootMessage!: string
    
    @testModule.State('testMessage') testMessage!: string
    @testModule.Getter('getTestMessage') getTestMessage!: string
    
    get getRootMessage() {
      return this.$store.state.rootMessage
    }
    
    get getmTestMessage() {
      return this.$store.state.test.testMessage
    }
    
    created() {
      this.$store.registerModule('test', TestModule)

      console.log(this.$store)
      
      console.log(this.rootMessage)
      console.log(this.stateRootMessage)
      console.log(this.getRootMessage)
      
      console.log(this.testMessage)
      console.log(this.getTestMessage)
      console.log(this.getmTestMessage)
    }

    beforeDestroy() {
      this.$store.unregisterModule('test')
    }
  }
</script>
