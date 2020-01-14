<template>
  <div>
    <h1>Copy Table</h1>
    <Button class="button">button</Button>
    <Button @click="handleCopy">复制</Button>
    <Button type="primary" @click="handlePaste">粘贴</Button>
    <ul class="flex-row title-wrap" style="width: 1081px;">
      <li v-for="(tableTitleItem, tableTitleIndex) in tableTitle"
          :key="tableTitleIndex"
          @click="selectColumn($event, tableTitleIndex)"
      >
        {{ `A${tableTitleIndex}` }}
      </li>
    </ul>
    <ul class="flex-row grid-wrap" style="width: 1081px;">
      <li v-for="(item, index) in tableSource" :key="index" class="pr">
        <input
              type="text"
              class="input-text input-text-active-three"
              style="height: 100%;"
              :value="item"
              :class="{ 'select-copy-before': selectCopyBefore(index), 'select-copy-after': selectCopyAfter(index) }"
              @input="handleInput($event, index)"
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Button } from 'element-ui'

  let selectData: any[] = []

  @Component({
    components: { Button }
  })

  export default class CopyTable extends Vue {
    private tableTitle: number[] = new Array(36)
    private tableSource: string[] = new Array(216).fill('')
    private selectIndexSource: number[] = []
    private startPaste: number = -1
    private copyBefore: boolean = true

    private selectColumn(event: Event, index: number) {
      if ((event as any).ctrlKey) {
        console.log(event)
      }
      const currentIndex: number = index + 1

      if (!this.copyBefore) {
        this.startPaste = currentIndex
        return
      }

      // 重复点击取消
      const indexOf = this.selectIndexSource.indexOf(currentIndex)
      if (indexOf !== -1) {
        this.selectIndexSource.splice(indexOf, 1)
        return
      }

      if (
        this.selectIndexSource.length &&
        this.selectIndexSource[this.selectIndexSource.length - 1] + 1 !== currentIndex
      ) {
        alert('请选择连续的列！')
        return
      }

      this.selectIndexSource.push(currentIndex)
    }

    private selectCopyBefore(index: number): boolean {
      const currentIndex: number = index + 1
      const remainder = currentIndex % 36 || 36

      if (this.selectIndexSource.includes(remainder)) {
        return true
      }

      return false
    }

    private selectCopyAfter(index: number): boolean {
      const currentIndex: number = index + 1
      const remainder = currentIndex % 36 || 36

      if (this.startPaste === remainder && !this.copyBefore) {
        return true
      }

      return false
    }

    private handleCopy() {
      if (!this.selectIndexSource.length) {
        return
      }

      selectData = []
      this.copyBefore = false
      this.selectIndexSource.map(item => {
        const selectIndex = item - 1
        selectData.push([
          {
            index: selectIndex + 36 * 0,
            value: this.tableSource[selectIndex + 36 * 0]
          },
          {
            index: selectIndex + 36 * 1,
            value: this.tableSource[selectIndex + 36 * 1]
          },
          {
            index: selectIndex + 36 * 2,
            value: this.tableSource[selectIndex + 36 * 2]
          },
          {
            index: selectIndex + 36 * 3,
            value: this.tableSource[selectIndex + 36 * 3]
          },
          {
            index: selectIndex + 36 * 4,
            value: this.tableSource[selectIndex + 36 * 4]
          },
          {
            index: selectIndex + 36 * 5,
            value: this.tableSource[selectIndex + 36 * 5]
          }
        ])
      })
      console.log(selectData, 'selectData')
    }

    private handlePaste() {
      if (this.startPaste === -1) {
        return
      }

      let difference = this.startPaste - this.selectIndexSource[0]
      selectData.map(selectData => {
        selectData.map((item: any) => {
          this.$set(this.tableSource, item.index + difference, item.value)
        })
      })

      this.selectIndexSource = []
      this.startPaste = -1
      this.copyBefore = true
    }

    private handleInput(event: Event, index: number) {
      this.tableSource[index] = (event.target as HTMLTextAreaElement).value
    }
  }
</script>

<style lang="scss">
  .title-wrap {
    display: flex;
    flex-flow: row wrap;
  }

  .title-wrap > li {
    width:30px;
    height:30px;
    padding-left: 1px;
    line-height: 30px;
    text-align:center;
    box-sizing: border-box;
  }

  .grid-wrap {
    display: flex;
    flex-flow: row wrap;

    border-top: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    box-sizing: border-box;
  }

  .grid-wrap > li {
    width: 30px;
    height: 30px;

    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    box-sizing: border-box;
  }

  .input-text {
    width: 98%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: hsla(0,0%,100%,.8);
    background: 0;
    font-size: 12px;
    background: rgba(0,0,0,.3);
    border: none;
    outline: none;
    font-family: Microsoft YaHei,arial;
  }

  .select-copy-before {
    background: green;
  }

  .select-copy-after {
    background: red;
  }
</style>
