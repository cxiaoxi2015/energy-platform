<!-- 能耗排名 -->
<template>
  <div class="rank">
    <div class="title">
      <span class="icon"></span>
      <a>能耗排名</a>
    </div>
    <div class="rank-content">
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'Rank',
  mixins: [],
  components: {},
  data () {
    return {}
  },
  methods: {
    chartInit () {
      const data = [
        { type: '设备1', value: 34 },
        { type: '设备2', value: 85 },
        { type: '设备3', value: 103 },
        { type: '设备4', value: 142 },
        { type: '设备5', value: 251 },
        { type: '设备6', value: 367 },
        { type: '设备7', value: 491 },
        { type: '设备8', value: 672 },
        { type: '设备9', value: 868 },
        { type: '设备10', value: 1234 }
      ]
      const chart = new Chart({
        container: 'chart',
        autoFit: true,
        padding: [10, 10, 20, 60]
      })
      chart.data(data)
      chart.scale({
        value: {
          max: 1400,
          min: 0,
          alias: '能耗量'
        }
      })
      chart.axis('type', {
        title: null,
        tickLine: null,
        line: {
          stroke: '#fff',
          lineWidth: 1
        },
        label: {
          style: {
            fill: '#ffffff'
          }
        }
      })

      chart.axis('value', {
        label: {
          style: {
            fill: '#ffffff'
          }
        },
        line: {
          lineWidth: 2, // 设置线的宽度
          stroke: 'red' // 设置线的颜色
        },
        title: {
          style: {
            fontSize: 12,
            fontWeight: 300
          }
        }
      })
      chart.legend(false)
      chart.coordinate().transpose()
      chart
        .interval()
        .position('type*value')
        .size(10)
        .label('value', {
          style: {
            fill: '#fff'
          },
          offset: 5
        })

      chart.interaction('element-active')
      chart.render()
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.chartInit()
  }
}
</script>

<style lang="scss" scoped>
    .rank {
      padding: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .title {
        display: flex;
        align-items: center;
        .icon {
          display: inline-block;
          width: 8px;
          height: 1.52rem;
          background: #3399FF;
          margin-right: 10px;
        }
        a {
          color: #fff;
          font-size: 0.8rem;
        }
      }
      .rank-content {
        flex: 1;
        overflow: hidden;
        padding: 10px;
        #chart {
          width: 100%;
          height: 100%;
        }
      }
    }
</style>
