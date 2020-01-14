<template>
  <div id="watch">
    <h1>this is a watch page !</h1>
    <p>{{ msg }}</p>
    <button @click="handleMsg">handleMsg</button>
    <button @click="handleRouter">handleRouter</button>
  </div>
</template>

<script lang="ts">
  import { Vue, Watch, Component } from 'vue-property-decorator'

  //  一定的写  不然 this 指向为 null
  @Component

  export default class WatchCom extends Vue {
    msg: string = 'default message'

    @Watch('msg')
    watchMsg(newValue: string, oldValue: string) {
      console.log(newValue, oldValue)
    }

    @Watch('$route')
    watchRouter(newValue: string, oldValue: string) {
      console.log(newValue, oldValue)
    }

    handleMsg() {
      this.msg = Math.random() > .5 ? '哈哈' : '嘻嘻'
    }

    handleRouter() {
      this.$router.push(`${this.$route.path}?a=${ Math.random() }`)
    }
  }
</script>
