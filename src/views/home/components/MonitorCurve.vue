<!-- 监控曲线 -->
<template>
  <div class="monitor-curve">
    <div class="content">
      <div class="title">监控曲线</div>
      <div class="detail">
        <el-select v-model="energy">
          <el-option value="1" label="电"></el-option>
          <el-option value="2" label="水"></el-option>
          <el-option value="3" label="气"></el-option>
          <el-option value="4" label="热"></el-option>
        </el-select>
        <div id="monitorCurve"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'MonitorCurve',
  mixins: [],
  components: {},
  data () {
    return {
      energy: '1'
    }
  },
  methods: {
    chartInit (data) {
      const chart = new Chart({
        container: 'monitorCurve',
        autoFit: true
      })

      chart.data(data)
      chart.scale({
        hours: {
          range: [0, 1],
          tickCount: 25
        }
      })

      chart.tooltip({
        showCrosshairs: true,
        shared: true,
        itemTpl: `
        <div style="margin-bottom: 10px;list-style:none;">
            <span style="background-color:{color};" class="g2-tooltip-marker"></span>
            {value}
        </div>
      `
      })

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

      chart.axis('hours', {
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

      chart
        .line()
        .position('hours*total')
        .color('type')
        .shape('smooth')
        .tooltip('hours*type*total', function (hours, type, total) {
          return {
            value: (type === 'electric' ? '用电量 ' : (type === 'gas' ? '用气量 ' : (type === 'water' ? '用水量 ' : '热量 '))) + total + (`${type === 'electric' || type === 'heat' ? ' kw/h' : ' m³'}`)
          }
        })

      chart
        .point()
        .position('hours*total')
        .color('type')
        .shape('circle')

      chart.legend(false)

      chart.render()
    }
  },
  computed: {},
  watch: {},
  mounted () {
    const data = []
    for (let i = 0; i < 25; i++) {
      data.push(...[
        { hours: i, type: 'electric', total: i < 12 ? 10 * i + 1 : 110 - i * 2 },
        { hours: i, type: 'gas', total: i < 12 ? 5 * i + 1 : 55 - i * 2 },
        { hours: i, type: 'water', total: i < 12 ? 8 * i + 1 : 88 - i * 2 },
        { hours: i, type: 'heat', total: i < 12 ? 12 * i + 1 : 121 - i * 2 }
      ])
    }
    this.chartInit(data)
  }
}
</script>

<style lang="scss" scoped>
    .monitor-curve {
      flex: 1;
      padding-left: 0 !important;
      padding-right: 0 !important;
      .detail {
        padding: 10px;
        position: relative;
        ::v-deep {
          .el-select {
            position: absolute;
            z-index: 10;
            top: 10px;
            right: 10px;
            .el-input {
              &.is-focus {
                .el-input__inner {
                  border-color: transparent;
                }
              }
              .el-input__inner {
                width: 80px;
                background: rgba(255, 255, 255, .85);
                outline: none;
                &:hover {
                  background: rgba(255, 255, 255, 1);
                }
                &:focus {
                  border-color: transparent;
                }
              }
            }
          }
        }
        #monitorCurve {
          width: 100%;
          height: 100%;
        }
      }
    }
</style>
