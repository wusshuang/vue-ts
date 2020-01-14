<template>
  <div id="computed">
    <h1>this is a watch page !</h1>
    <p>{{ fullName }}</p>
    <button @click="handleFullName">handleFullName</button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, } from 'vue-property-decorator'

  //  一定的写  不然 this 指向为 null
  @Component

  export default class Computed extends Vue {
    firstName: string = 'Tom'
    lastName: string = 'Lu'

    get fullName(): string {
      return `${ this.firstName } ${ this.lastName }`
    }

    handleFullName() {
      this.firstName = 'King'
    }
  }
</script>