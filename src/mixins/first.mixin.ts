import { Vue, Component } from 'vue-property-decorator'

// 这里配置语法会报错  需要在 shims-tsx.d.ts 中配置
// declare module 'vue/types/vue' {
//   interface Vue {
//     mixinMsg: string
//     value: string
//   }
// }

@Component

export default class FMixin extends Vue {
  mixinMsg: string = 'this is a first-mixin'
  value: string = 'the value in first-mixin'

  created() {
    console.log('混入对象的钩子被调用')
    this.printValue()
  }

  handleClick() {
    console.log('混入对象的方法被调用')
  }

  printValue() {
    console.log(this.value)
  }
}
