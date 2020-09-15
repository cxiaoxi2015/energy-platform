<!-- 首页 -->
<template>
  <div class="home">
    <div class="header">
      <div class="header-left">
        <div class="date-time">{{ dateTime }}</div>
        <div class="nav-button">全景展示</div>
      </div>
      <div class="header-mid"></div>
      <div class="header-right">
        <div class="nav-button">BIM监控</div>
        <div class="user-info">{{ userInfo.userName }}</div>
      </div>
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
import moment from 'moment'
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
    return {
      dateTime: moment().format('YYYY/MM/DD HH:mm:ss'),
      userInfo: {
        userName: 'admin'
      }
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted () {
    setInterval(() => {
      this.dateTime = moment().format('YYYY/MM/DD HH:mm:ss')
    }, 1000)
  },
  beforeMount () {
    // eslint-disable-next-line no-unexpected-multiline
    (function (doc, win) {
      const fn = () => {
        const docEl = doc.documentElement
        const clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 14 * (clientWidth / 1366) + 'px'
      }
      if (!doc.addEventListener) return
      win.addEventListener('resize', fn)
      doc.addEventListener('DOMContentLoaded', fn)
    })(document, window)
  },
  destroyed () {
    // eslint-disable-next-line no-unexpected-multiline
    (function (doc, win) {
      const fn = () => {
        const docEl = doc.documentElement
        const clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 14 * (clientWidth / 1366) + 'px'
      }
      if (!doc.addEventListener) return
      win.removeEventListener('resize', fn)
      doc.removeEventListener('DOMContentLoaded', fn)
      const docEl = doc.documentElement
      const clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = '100%'
    })(document, window)
  }
}
</script>

<style lang="scss" scoped>
    .home {
      padding: 0 1.1vw 1.3vh;
      width: 100%;
      height: 100%;
      background: url("~assets/images/bg.jpg") no-repeat;
      background-size: 100% 100%;
      color: #fff;
      .header {
        display: flex;
        height: 6.7vh;
        padding: 0 1.1vw 0 0.5vw;
        .header-left,
        .header-mid,
        .header-right {
          flex: 1;
        }
        .header-left {
          position: relative;
          .date-time {
            height: 100%;
            display: flex;
            align-items: flex-end;
          }
          .nav-button {
            border-radius: 4px;
            border: 1px solid #ddd;
            position: absolute;
            top: 5px;
            right: 3vw;
            padding: 10px;
          }
        }
        .header-right {
          position: relative;
          .nav-button {
            border-radius: 4px;
            border: 1px solid #ddd;
            position: absolute;
            top: 5px;
            left: 3vw;
            padding: 10px;
          }
          .user-info {
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            user-select: none;
          }
        }
      }
      .main {
        .main-item-wrapper {
          display: flex;
          & > div {
            height: 100%;
            border-radius: 4px;
            padding: 0.9vh 0.5vw;
            user-select: none;
          }
          &:first-child {
            height: 45.15vh;
            & > div {
              padding-bottom: 0;
            }
          }
          &:last-child {
            height: 45.15vh;
          }
        }
      }
    }
</style>
