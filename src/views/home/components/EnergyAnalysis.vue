<!-- 监测告警 -->
<template>
  <div class="energy-analysis">
    <div class="content">
      <div class="title">监测告警</div>
      <div class="detail">
        <div class="legend">
          <div class="legend-item">
            <div class="icon"></div>
            <div class="legend-name">已处理</div>
          </div>
          <div class="legend-item">
            <div class="icon"></div>
            <div class="legend-name">未处理</div>
          </div>
        </div>
        <div id="chartDev"></div>
        <div class="line-wrap">
          <div class="line"></div>
        </div>
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
            fill: '#fff',
            fontSize: 12,
            textAlign: 'center',
            textBaseline: 'middle'
          }
        })
      chart
        .interval()
        .adjust('stack')
        .position('count')
        .color('item', ['#04FEFC', '#FFA500'])
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
            fill: '#fff',
            fontSize: 12,
            textAlign: 'center',
            textBaseline: 'middle'
          }
        })
      chart
        .interval()
        .adjust('stack')
        .position('count')
        .color('item', ['#04FEFC', '#FFA500'])
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
        .legend {
          position: absolute;
          top: 25px;
          left: 30px;
          display: flex;
          .legend-item {
            display: flex;
            align-items: center;
            &:first-child {
              margin-right: 15px;
              .icon {
                background: #04FEFC;
              }
            }
            &:last-child {
              .icon {
                background: #FFA500;
              }
            }
            .icon {
              width: 20px;
              height: 10px;
              margin-right: 5px;
              border-radius: 2px;
            }
            .legend-name {
              font-size: 0.75rem;
              font-weight: bold;
            }
          }
        }
        #chartDev,
        #chartComMun {
          flex: 1;
          overflow: hidden;
        }
        .line-wrap {
          width: 2px;
          height: 100%;
          display: flex;
          align-items: center;
          margin: 0 5px;
          .line {
            border-radius: 2px;
            width: 100%;
            height: 80px;
            background: linear-gradient(to bottom, rgba(8, 252, 252, 0.1), rgba(8, 252, 252, 0.5), rgba(8, 252, 252, 0.1));
          }
        }
      }
    }
</style>
