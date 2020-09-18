<!-- 用能分析 -->
<template>
  <div class="energy-analysis">
    <div class="content">
      <div class="title">用能分析</div>
      <div class="detail">
        <el-select v-model="energy" @change="handleEnergyChange">
          <el-option value="electric" label="电"></el-option>
          <el-option value="water" label="水"></el-option>
          <el-option value="gas" label="气"></el-option>
          <el-option value="heat" label="热"></el-option>
        </el-select>
        <div id="energyAnalysis"></div>
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
    chartInit (data) {
      const _this = this
      const colorSet = {
        electric: '#4FAAEB',
        water: '#9AD681',
        gas: '#FED46B',
        heat: '#4FAAEB'
      }

      const chart = new Chart({
        container: 'energyAnalysis',
        autoFit: true,
        padding: [50, 80]
      })

      chart.data(data)
      chart.legend(false)

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
      chart.axis('building', {
        label: {
          style: {
            fill: '#ffffff'
          }
        },
        line: {
          lineWidth: 1 // 设置线的宽度
        }
      })

      chart.tooltip({
        shared: true,
        itemTpl: `
        <div style="margin-bottom: 10px;list-style:none;">
            <span style="background-color:{color};" class="g2-tooltip-marker"></span>
            {value}
        </div>
      `
      })

      chart
        .interval().position('building*total').color('total', colorSet[_this.energy])
        .position('building*total')
        .size(30)
        .label('total', {
          offset: -10 // 文本距离图形的距离
        })
      chart.render()
      this.chart = chart
    },

    /**
     * @description: 能源切换
     * @date: 2020-09-17 14:19:31
     * @auth: chenxiaoxi
     */
    handleEnergyChange () {
      const showData = this.toggleEnergy()
      this.chart.changeData(showData)
    },

    /**
     * @description: 能源切换
     * @date: 2020-09-17 16:46:18
     * @auth: chenxiaoxi
     */
    toggleEnergy () {
      const showData = []
      this.energyData.map(item => {
        showData.push({
          building: item.building,
          total: item[this.energy]
        })
      })
      return showData
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.energyData = [
      { building: '1号楼', electric: 168, gas: 208, water: 400, heat: 3000 }
      // { building: '2号楼', electric: 468, gas: 158, water: 230, heat: 1234 }
    ]
    const showData = this.toggleEnergy()
    this.chartInit(showData)
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
      }
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
    }
</style>
