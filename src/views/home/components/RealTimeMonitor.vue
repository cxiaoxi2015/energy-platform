<!-- 实时监控 -->
<template>
  <div class="real-time-monitor">
    <div class="content">
      <div class="title">实时监控</div>
      <div class="detail">
        <div class="energy-item">
          <div class="icon iconfont">&#xe631;</div>
          <span>电</span>
          <div class="energy-total">
            <countTo :startVal="startVal" :endVal="energy.electric" :duration="duration"></countTo>
          </div>
          <span>kWh</span>
        </div>
        <div class="energy-item">
          <div class="icon iconfont">&#xe613;</div>
          <span>气</span>
          <div class="energy-total">
            <countTo :startVal="startVal" :endVal="energy.gas" :duration="duration"></countTo>
          </div>
          <span>Nm</span>
        </div>
        <div class="energy-item">
          <div class="icon iconfont">&#xe60b;</div>
          <span>水</span>
          <div class="energy-total">
            <countTo :startVal="startVal" :endVal="energy.water" :duration="duration"></countTo>
          </div>
          <span>t</span>
        </div>
        <div class="energy-item">
          <div class="icon iconfont">&#xe614;</div>
          <span>热</span>
          <div class="energy-total">
            <countTo :startVal="startVal" :endVal="energy.heat" :duration="duration"></countTo>
          </div>
          <span>kWh</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'RealTimeMonitor',
  mixins: [],
  components: {
    countTo
  },
  data () {
    return {
      duration: 2000,
      startVal: 0,
      energy: {
        electric: 0,
        gas: 0,
        water: 0,
        heat: 0
      }
    }
  },
  methods: {
    /**
     * @description: 数据获取
     * @date: 2020-09-15 16:30:58
     * @auth: chenxiaoxi
     */
    fetchData () {
      this.energy = {
        electric: 301,
        gas: 400,
        water: 505,
        heat: 802
      }
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.fetchData()
    setInterval(() => {
      this.fetchData()
    }, 1000 * 60 * 15)
  }
}
</script>

<style lang="scss" scoped>
    .real-time-monitor {
      width: 25vw;
      .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        .energy-item {
          display: flex;
          overflow: hidden;
          align-items: center;
          background: #0448B1;
          margin-bottom: 1.8vh;
          width: 80%;
          height: 6vh;
          border: 2px solid #199EFC;
          padding-left: 1.5vw;
          &:last-child {
            margin-bottom: 0;
          }
          .icon {
            font-size: 30px;
          }
          & > span {
            font-weight: 600;
            margin: 0 5px;
          }
          .energy-total {
            margin: 0 10px;
            span {
              position: relative;
              border-bottom: 2px solid #199EFC;
              padding: 5px 30px;
              top: -2px;
            }
          }
          span {
            position: relative;
            top: 2px;
          }
        }
      }
    }
</style>
