<!-- 能耗排名 -->
<template>
  <div class="rank">
    <div class="title">
      <span class="icon"></span>
      <a>能耗排名</a>
    </div>
    <div class="rank-content">
      <div id="chart" ref="rankChart"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
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
        { name: '楼宇1', value: 34 },
        { name: '楼宇2', value: 85 },
        { name: '楼宇3', value: 103 },
        { name: '楼宇4', value: 142 },
        { name: '楼宇5', value: 251 },
        { name: '楼宇6', value: 367 },
        { name: '楼宇7', value: 491 },
        { name: '楼宇8', value: 672 },
        { name: '楼宇9', value: 868 },
        { name: '楼宇10', value: 1234 }
      ]
      const dataName = []
      const dataValue = []
      data.map(item => {
        dataName.push(item.name)
        dataValue.push(item.value)
      })

      this.myChart = echarts.init(this.$refs.rankChart)
      this.myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '2%',
          left: '3%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          name: 'kwh',
          nameTextStyle: {
            color: '#fff',
            padding: [0, 0, 0, -10]
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              opacity: 0.5
            }
          }
        },
        yAxis: {
          type: 'category',
          data: dataName,
          nameTextStyle: {
            color: '#fff',
            padding: [0, 0, 0, -10]
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '耗电量',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
              normal: {
                color: '#3399FF'
              }
            },
            data: dataValue
          }
        ]
      })
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
