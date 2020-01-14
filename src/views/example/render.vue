<template>
  <div id="mixin">
    <h1>render 函数可以加快编译速度（相比 template 模板），可以动态创建一些标签</h1>
    <render-module :label="2"></render-module>
    <render-module :label="1">
      this is a h1 element !
    </render-module>

    <list :listSource="['JavaScript', 'TypeScript']"></list>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    components: {
      renderModule: {
        render(this: any, createElement: any): any {
          return createElement(
            'h' + this.label,
            {
              class: 'title'
            },
            this.$slots.default ? this.$slots.default : 'default value !'
          )
        },
        props: {
          label: {
            type: Number,
            default: 1
          }
        }
      },
      list: {
        render(this: any, h: any): any {
          if (this.listSource.length) {
            return h(
              'ul',
              {
                class: 'list'
              },
              this.listSource.map((item: any): any => {
                return h(
                  'li',
                  {
                    class: 'item',
                    on: {
                      click: this.handleClick
                    }
                  },
                  item
                )
              })
            )
          } else {
            return h('p', '没有传递 listSource')
          }
        },
        props: {
          listSource: {
            type: Array,
            default: () => {
              return []
            }
          }
        },
        methods: {
          handleClick(e: any): void {
            alert(e.target.innerHTML || 'default value !')
          }
        }
      }
    }
  })

  export default class SecondMixin extends Vue {}
</script>
