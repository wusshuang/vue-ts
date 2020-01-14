<template>
  <div id="echart">
    <div ref="chart" style="height: 600px;"></div>
  </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import echarts from 'echarts'

    @Component

    export default class BasicLineChart extends Vue {
        option: any = {}
        private Chart: any;

        mounted() {
            this.$nextTick(() => {
                this.setOptions()
                this.initChart()
            })
        }

        setOptions() {
            window.app.title = '力引导布局'

            function createNodes(count: any) {
                let nodes = [];
                for (let i = 0; i < count; i++) {
                    nodes.push({
                        id: i
                    });
                }
                return nodes;
            }

            function createEdges(count: any) {
                let edges = [];
                if (count === 2) {
                    return [[0, 1]];
                }
                for (let i = 0; i < count; i++) {
                    edges.push([i, (i + 1) % count]);
                }
                return edges;
            }

            let datas = [];
            for (let i = 0; i < 16; i++) {
                datas.push({
                    nodes: createNodes(i + 2),
                    edges: createEdges(i + 2)
                });
            }

            this.option = {
                series: datas.map((item, idx) => {
                    return {
                        type: 'graph',
                        layout: 'force',
                        animation: false,
                        data: item.nodes,
                        left: (idx % 4) * 25 + '%',
                        top: Math.floor(idx / 4) * 25 + '%',
                        width: '25%',
                        height: '25%',
                        force: {
                            // initLayout: 'circular'
                            // gravity: 0
                            repulsion: 60,
                            edgeLength: 2
                        },
                        edges: item.edges.map((e) => {
                            return {
                                source: e[0],
                                target: e[1]
                            };
                        })
                    };
                })
            };
        }

        initChart() {
            this.Chart = echarts.init(this.$refs.chart as HTMLCanvasElement)
            this.Chart.setOption(this.option)
        }
    }
</script>
