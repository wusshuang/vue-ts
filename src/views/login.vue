<template>
  <div id="login">
    <h1>Login</h1>
    <Button @click="handleLogin">登入</Button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Button } from 'element-ui'

  @Component({
    components: {
      Button
    }
  })

  export default class Login extends Vue {
    handleLogin(): void {
      const token =
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOi'
      window.token = token
      localStorage.setItem('token', token)
      this.$router.push('/')
    }
  }
</script>

<style lang="scss">
  #login {
    height: 100vh;
    line-height: 20vh;

    text-align: center;
  }
</style>
