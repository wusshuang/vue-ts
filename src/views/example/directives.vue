<template>
  <div id="directives">
    <h1>this is a directives page !</h1>
    <input type="text" v-focus="obj" value="123">
    <input type="text" v-model="obj.a">
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
      directives: {
          focus: {
              bind: (el, b) => {
                console.log(el, b, 'bind')
              },
              inserted: (el, b) => {
                  el.focus()
                  console.log(b.value.a, 'inserted')
              },
              update: (el) => {
                  console.log('update')
              },
              componentUpdated: () => {
                  console.log('componentUpdated')
              }
          }
      }
  })

  export default class Directives extends Vue {
    obj: any = {
      a: 1
    }
  }

</script>
