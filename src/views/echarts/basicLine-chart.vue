<template>
  <div id="echart">
    <h1>不成功 😣 ！</h1>
    <div ref="chart" style="height: 300px;"></div>
    <p>不成功的原因是：没有指定存放 echarts 盒子的高度</p>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import echarts from 'echarts'

  @Component

  export default class BasicLineChart extends Vue {
      option: any = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      }
      private Chart: any;

      mounted() {
          this.$nextTick(() => {
              this.initChart()
          })
      }

      initChart() {
          this.Chart = echarts.init(this.$refs.chart as HTMLCanvasElement)
          this.Chart.setOption(this.option)
      }
  }
</script>
