<!-- 能耗占比 -->
<template>
  <div class="prop-energy-cons">
    <div class="title">
      <span class="icon"></span>
      <a>能耗占比</a>
    </div>
    <div class="chart" id="propEnergyCons"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'PropEnergyCons',
  mixins: [],
  components: {},
  data () {
    return {}
  },
  methods: {
    chartInit () {
      const data = [
        { item: '电', count: 40, percent: 0.4 },
        { item: '水', count: 21, percent: 0.21 },
        { item: '气', count: 17, percent: 0.17 },
        { item: '热', count: 13, percent: 0.13 }
      ]
      const chart = new Chart({
        container: 'propEnergyCons',
        autoFit: true
      })
      chart.data(data)
      chart.scale('percent', {
        formatter: (val) => {
          val = val * 100 + '%'
          return val
        }
      })
      chart.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item', ['#167BFF', '#558C7E', '#a9b151', '#EA5262'])
        .label('percent', (percent) => {
          return {
            style: {
              fill: '#fff'
            },
            content: (data) => {
              return `${data.item}: ${percent * 100}%`
            }
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })

      chart.interaction('element-active')

      chart.legend({
        itemName: {
          style: {
            fill: '#fff'
          }
        }
      })
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
    .prop-energy-cons {
      width: 32.5vw;
      height: 31vh;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
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
      .chart {
        flex: 1;
        overflow: hidden;
      }
    }
</style>
