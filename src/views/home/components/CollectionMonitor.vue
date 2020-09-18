<!-- 采集监测 -->
<template>
  <div class="collection-monitor">
    <div class="content">
      <div class="title">采集监测</div>
      <div class="detail">
        <div class="table">
          <div class="line left-top"></div>
          <div class="line top-left"></div>
          <div class="line bottom-right"></div>
          <div class="line right-bottom"></div>
          <div class="table-header">
            <div class="table-header-item">类型</div>
            <div class="table-header-item">当前采集数</div>
            <div class="table-header-item">总数</div>
            <div class="table-header-item">占比</div>
          </div>
          <div class="table-content">
            <div class="table-content-item"
                 v-for="(item, key) of energyData"
                 :key="key"
            >
              <div class="item-column">{{ getKeyName(key) }}</div>
              <div class="item-column item-value"
                   v-for="(column, colKey) in item"
                   :key="colKey">
                <countTo :startVal="startVal" :endVal="column" :duration="duration"></countTo>
                <span v-if="colKey === 'ratio'">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'CollectionMonitor',
  mixins: [],
  components: {
    countTo
  },
  data () {
    return {
      startVal: 0,
      duration: 2000,
      energyData: {
        electric: {
          current: 100,
          total: 880,
          ratio: 11.3
        },
        gas: {
          current: 202,
          total: 1050,
          ratio: 19.2
        },
        water: {
          current: 203,
          total: 1400,
          ratio: 14.5
        },
        heat: {
          current: 29002,
          total: 100253,
          ratio: 28.9
        }
      }
    }
  },
  methods: {
    getKeyName (key) {
      switch (key) {
        case 'electric':
          return '电'
        case 'water':
          return '水'
        case 'gas':
          return '气'
        case 'heat':
          return '热'
      }
    }
  },
  computed: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    .collection-monitor {
      width: 25vw;
      .detail {
        padding: 10px;
        .table {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          position: relative;
          .line {
            background: #199EFC;
            position: absolute;
            &.left-top {
              height: 2px;
              top: 8px;
              left: 0;
              animation: left-top 2s linear forwards;
              @keyframes left-top {
                0% {
                  width: 0;
                }
                100% {
                  width: 100%;
                }
              }
            }
            &.top-left {
              width: 2px;
              top: 0;
              left: 8px;
              animation: top-left 2s linear forwards;
              @keyframes top-left {
                0% {
                  height: 0;
                }
                100% {
                  height: 100%;
                }
              }
            }
            &.bottom-right {
              width: 2px;
              bottom: 0;
              right: 8px;
              animation: bottom-right 2s linear forwards;
              @keyframes bottom-right {
                0% {
                  height: 0;
                }
                100% {
                  height: 100%;
                }
              }
            }
            &.right-bottom {
              height: 2px;
              bottom: 8px;
              right: 0;
              animation: right-bottom 2s linear forwards;
              @keyframes right-bottom {
                0% {
                  width: 0;
                }
                100% {
                  width: 100%;
                }
              }
            }
          }
          .table-header {
            display: flex;
            height: 20%;
            .table-header-item {
              flex: 1;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.9rem;
              font-weight: 600;
            }
          }
          .table-content {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            .table-content-item {
              flex: 1;
              overflow: hidden;
              display: flex;
              .item-column {
                flex: 1;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
                &.item-value {
                  color: #EBB51C;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }
</style>
