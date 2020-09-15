<!-- 首页 -->
<template>
  <div class="home">
    <div class="header">
      <div class="header-left"></div>
      <div class="header-mid"></div>
      <div class="header-right"></div>
    </div>
    <div class="main">
      <div class="main-item-wrapper">
        <RealTimeMonitor></RealTimeMonitor>
        <GisMap></GisMap>
        <CollectionMonitor></CollectionMonitor>
      </div>
      <div class="main-item-wrapper">
        <EnergyRingRatio></EnergyRingRatio>
        <MonitorCurve></MonitorCurve>
        <EnergyAnalysis></EnergyAnalysis>
      </div>
    </div>
  </div>
</template>

<script>
import RealTimeMonitor from './components/RealTimeMonitor'
import EnergyRingRatio from './components/EnergyRingRatio'
import GisMap from './components/GisMap'
import MonitorCurve from './components/MonitorCurve'
import CollectionMonitor from './components/CollectionMonitor'
import EnergyAnalysis from './components/EnergyAnalysis'
export default {
  name: 'home',
  mixins: [],
  components: {
    RealTimeMonitor,
    EnergyRingRatio,
    GisMap,
    MonitorCurve,
    CollectionMonitor,
    EnergyAnalysis
  },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    .home {
      padding: 0 1.8vw 1.3vh;
      width: 100%;
      height: 100%;
      background: url("~assets/images/bg.jpg") no-repeat;
      background-size: 100% 100%;
      color: #fff;
      .header {
        height: 4.8vh;
        margin-bottom: 1.9vh;
      }
      .main {
        .main-item-wrapper {
          & > div {
            display: inline-block;
            width: calc(33vw - 3.2vw / 3);
            height: 100%;
            border-radius: 4px;
            padding: 0.5vw 0.9vh;
          }
          &:first-child {
            height: 45.15vh;
          }
          &:last-child {
            height: 45.15vh;
          }
        }
      }
    }
</style>
