<!-- 监控曲线 -->
<template>
  <div class="monitor-curve">
    <div class="content">
      <div class="title">监控曲线</div>
      <div class="detail">
        <ul class="category">
          <li v-for="item in category"
              :class="{'active': energy === item.value}"
              :key="item.value"
              @click="handleCategoryClick(item.value)">{{ item.label }}</li>
        </ul>
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
      energy: 'electric',
      chart: null,
      energyData: [],
      category: [
        {
          label: '电',
          value: 'electric'
        },
        {
          label: '水',
          value: 'water'
        },
        {
          label: '气',
          value: 'gas'
        },
        {
          label: '热',
          value: 'heat'
        }
      ],
    }
  },
  methods: {
    chartInit (data) {
      const _this = this
      const chart = new Chart({
        container: 'monitorCurve',
        autoFit: true,
        padding: [30, 30, 30, 60]
      })

      const colorSet = {
        electric: '#167BFF',
        water: '#00AFA8',
        gas: '#A2AD45',
        heat: '#C98071'
      }

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
            return val + (_this.energy === 'electric' || _this.energy === 'heat' ? 'kWh' : (_this.energy === 'gas' ? 'Nm' : 't'))
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
        .color('type', (value) => colorSet[value])
        .shape('smooth')
        .tooltip('hours*type*total', function (hours, type, total) {
          return {
            value: (type === 'electric' ? '用电量 ' : (type === 'gas' ? '用气量 ' : (type === 'water' ? '用水量 ' : '热量 '))) + total + (`${type === 'electric' || type === 'heat' ? ' kWh' : (type === 'gas' ? ' Nm' : 't')}`)
          }
        })

      chart
        .point()
        .position('hours*total')
        .color('type')
        .shape('circle')

      chart.legend(false)

      chart.render()
      this.chart = chart
    },

    /**
     * @description: 能源切换
     * @date: 2020-09-17 14:19:31
     * @auth: chenxiaoxi
     */
    handleCategoryClick (type) {
      this.energy = type
      const showData = this.energyData.filter(item => item.type === type)
      this.chart.changeData(showData)
    }
  },
  computed: {},
  watch: {},
  mounted () {
    const data = []
    for (let i = 0; i < 25; i++) {
      data.push(...[
        { hours: i, type: 'electric', total: i < 12 ? 10 * i + 1 : 110 - i * 2 },
        { hours: i, type: 'gas', total: i < 12 ? 5000 * i + 1 : 55 - i * 2 },
        { hours: i, type: 'water', total: i < 12 ? 8 * i + 1 : 88 - i * 2 },
        { hours: i, type: 'heat', total: i < 12 ? 12 * i + 1 : 121 - i * 2 }
      ])
    }
    this.energyData = JSON.parse(JSON.stringify(data))
    const showData = this.energyData.filter(item => item.type === this.energy)
    this.chartInit(showData)
  }
}
</script>

<style lang="scss" scoped>
    .monitor-curve {
      flex: 1;
      overflow: hidden;
      padding-left: 0 !important;
      padding-right: 0 !important;
      .detail {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        .category {
          display: flex;
          justify-content: flex-end;
        }
        #monitorCurve {
          width: 100%;
          height: 100%;
          overflow: hidden;
          flex: 1;
        }
      }
    }
</style>
