<!-- 监测告警 -->
<template>
  <div class="energy-analysis">
    <div class="content">
      <div class="title">监测告警</div>
      <div class="detail">
        <div id="chartDev"></div>
        <div id="chartComMun"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'EnergyAnalysis',
  mixins: [],
  components: {},
  data () {
    return {
      energy: 'electric',
      energyData: []
    }
  },
  methods: {
    chartDevInit (data) {
      const chart = new Chart({
        container: 'chartDev',
        autoFit: true,
        padding: [0, 25]
      })
      chart.data(data)
      chart.scale('count', {
        formatter: (val) => {
          val = val * 100 + '%'
          return val
        }
      })
      chart.coordinate('theta', {
        radius: 0.5,
        innerRadius: 0.65
      })
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      chart
        .annotation()
        .text({
          position: ['50%', '50%'],
          content: '设备类',
          style: {
            fontSize: 14,
            fill: '#fff',
            textAlign: 'center'
          }
        })
      chart
        .interval()
        .adjust('stack')
        .position('count')
        .color('item', ['#55CFA4', '#FFA500'])
        .label('count', (count) => {
          return {
            style: {
              fill: '#fff'
            },
            content: (data) => {
              return `${data.item}: ${count}`
            }
          }
        })
        .tooltip('item*count', (item, count) => {
          return {
            name: item,
            value: count
          }
        })

      chart.legend(false)
      chart.interaction('element-active')
      chart.render()
    },
    chartComMunInit (data) {
      const chart = new Chart({
        container: 'chartComMun',
        autoFit: true,
        forceFit: true,
        padding: [0, 20, 0, 15]
      })
      chart.data(data)
      chart.scale('count', {
        formatter: (val) => {
          val = val * 100 + '%'
          return val
        }
      })
      chart.coordinate('theta', {
        radius: 0.45,
        innerRadius: 0.65
      })
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      chart
        .annotation()
        .text({
          position: ['50%', '50%'],
          content: '通讯类',
          style: {
            fontSize: 14,
            fill: '#fff',
            fontWeight: 'normal',
            textAlign: 'center'
          }
        })
      chart
        .interval()
        .adjust('stack')
        .position('count')
        .color('item', ['#55CFA4', '#FFA500'])
        .label('count', (count) => {
          return {
            style: {
              fill: '#fff'
            },
            content: (data) => {
              return `${data.item}: ${count}`
            }
          }
        })
        .tooltip('item*count', (item, count) => {
          return {
            name: item,
            value: count
          }
        })

      chart.legend(false)
      chart.interaction('element-active')

      chart.render()
    }
  },
  computed: {},
  watch: {},
  mounted () {
    const data = [
      { item: '处理数', count: 5 },
      { item: '未处理', count: 22 }
    ]
    const data2 = [
      { item: '处理数', count: 17 },
      { item: '未处理', count: 20 }
    ]
    this.chartDevInit(data)
    this.chartComMunInit(data2)
  }
}
</script>

<style lang="scss" scoped>
    .energy-analysis {
      width: 25vw;
      padding: 10px;
      position: relative;
      #energyAnalysis {
        width: 100%;
        height: 100%;
      }
      .detail {
        padding: 10px;
        position: relative;
        display: flex;
        #chartDev,
        #chartComMun {
          flex: 1;
          overflow: hidden;
        }
      }
    }
</style>
