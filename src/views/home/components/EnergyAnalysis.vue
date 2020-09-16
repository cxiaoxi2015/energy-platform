<!-- 用能分析 -->
<template>
  <div class="energy-analysis">
    <div class="content">
      <div class="title">用能分析</div>
      <div class="detail">
        <div id="energyAnalysis"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2'
import { isEqual } from 'lodash'
export default {
  name: 'EnergyAnalysis',
  mixins: [],
  components: {},
  data () {
    return {}
  },
  methods: {
    chartInit (data) {
      const colorSet = {
        electric: '#4FAAEB',
        water: '#9AD681',
        gas: '#FED46B',
        heat: '#4FAAEB'
      }

      registerShape('interval', 'text-interval', {
        draw (cfg, container) {
          const points = this.parsePoints(cfg.points) // 将0-1空间的坐标转换为画布坐标
          const origin = cfg.data
          const value = origin.total
          const group = container.addGroup()
          group.addShape('text', {
            attrs: {
              text: value,
              textAlign: 'center',
              x: points[1].x + cfg.size / 2,
              y: points[1].y,
              fontFamily: 'PingFang SC',
              fontSize: 12,
              fill: '#BBB'
            }
          })
          group.addShape('polygon', {
            attrs: {
              points: points.map((point) => [point.x, point.y]),
              fill: cfg.color
            }
          })

          return group
        }
      })

      registerShape('interval', 'fall-flag', {
        getPoints (shapeInfo) {
          const { x, y, y0, size } = shapeInfo
          return [
            { x: x + size, y: y0 + size },
            { x, y }
          ]
        }
      })

      const chart = new Chart({
        container: 'energyAnalysis',
        autoFit: true
      })

      chart.data(data)
      chart.scale({
        value: {
          alias: '访问数',
          nice: true
        },
        name: {
          alias: '步骤名称'
        }
      })
      chart.legend(false)

      chart.axis('total', {
        label: {
          formatter: (val) => {
            return val
          },
          style: {
            fill: '#ffffff'
          }
        },
        line: {
          lineWidth: 2, // 设置线的宽度
          stroke: 'red' // 设置线的颜色
        }
      })
      chart.axis('energy', {
        label: {
          formatter: (type) => {
            return type === 'electric' ? '电' : (type === 'water' ? '水' : (type === 'gas' ? '气' : '热'))
          },
          style: {
            fill: '#ffffff'
          }
        },
        line: {
          lineWidth: 2, // 设置线的宽度
          stroke: 'red' // 设置线的颜色
        }
      })

      chart
        .interval()
        .position('energy*total')
        .shape('text-interval')
        .color('energy', (value) => colorSet[value])
        .size(30)

      chart
        .interval()
        .position('energy*total')
        .color('#E4E4E4')
        .shape('fall-flag')

      chart.render()
    }
  },
  computed: {},
  watch: {},
  mounted () {
    const data = [
      { energy: 'electric', total: 138, washaway: 0.21014492753623193 },
      { energy: 'water', total: 109, washaway: 0.5596330275229358 },
      { energy: 'gas', total: 48, washaway: 0 },
      { energy: 'heat', total: 108, washaway: 0 }
    ]
    this.chartInit(data)
  }
}
</script>

<style lang="scss" scoped>
    .energy-analysis {
      width: 22vw;
      padding: 10px;
      position: relative;
      #energyAnalysis {
        width: 100%;
        height: 100%;
      }
      .detail {
        padding: 10px;
        position: relative;
      }
    }
</style>
