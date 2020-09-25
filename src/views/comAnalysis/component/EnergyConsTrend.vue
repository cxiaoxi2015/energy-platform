<!-- 能耗趋势 -->
<template>
  <div class="energy-cons-trend">
    <div class="chart-header">
      <div class="title">
        <span class="icon"></span>
        <a>能耗趋势</a>
      </div>
      <ul class="category">
        <li v-for="item in category"
            :class="{'active': active === item.value}"
            :key="item.value"
            @click="handleCategoryClick(item.value)">{{ item.label }}</li>
      </ul>
    </div>
    <div class="chart" ref="energyConsTrend"></div>
  </div>
</template>

<script>
import echart from 'echarts'
export default {
  name: 'EnergyConsTrend',
  mixins: [],
  components: {},
  data () {
    return {
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
      active: 'electric',
      myChart: null,
      options: null,
      data: [],
      monthDay: []
    }
  },
  methods: {
    chartInit () {
      this.myChart = echart.init(this.$refs.energyConsTrend)
      this.myChart.setOption(this.options)
    },

    handleCategoryClick (value) {
      this.active = value
      const data = []
      for (let i = 0; i < 31; i++) {
        data.push(Math.ceil(Math.random(0, 1) * 100))
      }
      const options = {
        title: {
          left: 'center',
          text: '用电趋势',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#fff'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: this.monthDay,
          name: '日',
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
          type: 'value',
          name: this.active === 'electric' ? 'kwh' : (this.active === 'water' ? 'm³' : (this.active === 'gas' ? 'Nm' : 'kwh')),
          nameTextStyle: {
            color: '#fff',
            padding: [0, 0, 0, -35]
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              opacity: 0.5
            }
          }
        },
        series: [
          {
            name: this.active === 'electric' ? '用电量' : (this.active === 'water' ? '用水量' : (this.active === 'gas' ? '用气量' : '热量')),
            type: 'bar',
            data: data,
            itemStyle: {
              normal: {
                color: '#FFB980'
              }
            }
          }
        ]
      }
      this.myChart.setOption(options)
    }
  },
  computed: {},
  watch: {},
  mounted () {
    const data = []
    const monthDay = []
    for (let i = 0; i < 31; i++) {
      data.push(Math.ceil(Math.random(0, 1) * 100))
      monthDay.push(i + 1)
    }
    this.data = data
    this.monthDay = monthDay
    this.options = {
      title: {
        left: 'center',
        text: '用电趋势',
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#fff'
          }
        }
      },
      xAxis: {
        type: 'category',
        data: monthDay,
        name: '日',
        nameTextStyle: {
          color: '#fff',
          padding: [0, 0, 0, -10]
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        }
      },
      yAxis: {
        type: 'value',
        name: this.active === 'electric' ? 'kwh' : (this.active === 'water' ? 'm³' : (this.active === 'gas' ? 'Nm' : 'kwh')),
        nameTextStyle: {
          color: '#fff',
          padding: [0, 0, 0, -35]
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'transparent'
          }
        }
      },
      series: [
        {
          name: this.active === 'electric' ? '用电量' : (this.active === 'water' ? '用水量' : (this.active === 'gas' ? '用气量' : '热量')),
          type: 'bar',
          data: data,
          itemStyle: {
            normal: {
              color: '#FFB980'
            }
          }
        }
      ]
    }
    this.chartInit()
  }
}
</script>

<style lang="scss" scoped>
    .energy-cons-trend {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
      }
      .chart {
        flex: 1;
        overflow: hidden;
      }
    }
</style>
