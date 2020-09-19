<!-- 能源环比 -->
<template>
  <div class="energy-ring-ratio">
    <div class="content">
      <div class="title">能源环比</div>
      <div class="detail">
        <div class="energy-item-wrap">
          <div class="energy-item">
            <div class="top">
              <span>今日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.electric.today" :duration="duration"></countTo>
              <span>kWh</span>
            </div>
            <div class="mid">
              <span>电</span>
              <div class="icon-outer electric">
                <div class="item-right"></div>
                <div class="inner">
                  <div class="inner-icon iconfont">&#xe631;</div>
                </div>
              </div>
              <span>占比</span>
              <p>25</p>
              <span>%</span>
            </div>
            <div class="bottom">
              <span>昨日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.electric.today" :duration="duration"></countTo>
              <span>kWh</span>
            </div>
          </div>
          <div class="energy-item">
            <div class="top">
              <span>今日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.water.today" :duration="duration"></countTo>
              <span>t</span>
            </div>
            <div class="mid">
              <span>水</span>
              <div class="icon-outer water">
                <div class="item-right"></div>
                <div class="inner">
                  <div class="inner-icon iconfont">&#xe60b;</div>
                </div>
              </div>
              <span>占比</span>
              <p>25</p>
              <span>%</span>
            </div>
            <div class="bottom">
              <span>昨日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.water.today" :duration="duration"></countTo>
              <span>t</span>
            </div>
          </div>
        </div>
        <div class="energy-item-wrap">
          <div class="energy-item">
            <div class="top">
              <span>今日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.gas.today" :duration="duration"></countTo>
              <span>Nm</span>
            </div>
            <div class="mid">
              <span>气</span>
              <div class="icon-outer gas">
                <div class="item-right"></div>
                <div class="inner">
                  <div class="inner-icon iconfont">&#xe613;</div>
                </div>
              </div>
              <span>占比</span>
              <p>25</p>
              <span>%</span>
            </div>
            <div class="bottom">
              <span>昨日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.gas.today" :duration="duration"></countTo>
              <span>Nm</span>
            </div>
          </div>
          <div class="energy-item">
            <div class="top">
              <span>今日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.heat.today" :duration="duration"></countTo>
              <span>kWh</span>
            </div>
            <div class="mid">
              <span>热</span>
              <div class="icon-outer heat">
                <div class="item-right"></div>
                <div class="inner">
                  <div class="inner-icon iconfont">&#xe614;</div>
                </div>
              </div>
              <span>占比</span>
              <p>25</p>
              <span>%</span>
            </div>
            <div class="bottom">
              <span>昨日用量:</span>
              <countTo :startVal="startVal" :endVal="energy.heat.today" :duration="duration"></countTo>
              <span>kWh</span>
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
  name: 'EnergyRingRatio',
  mixins: [],
  components: {
    countTo
  },
  data () {
    return {
      startVal: 0,
      duration: 2000,
      energy: {
        electric: {
          today: 200,
          yesterday: 180
        },
        gas: {
          today: 200,
          yesterday: 180
        },
        water: {
          today: 200,
          yesterday: 180
        },
        heat: {
          today: 200,
          yesterday: 180
        }
      }
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    @import '~styles/variable.scss';
    .energy-ring-ratio {
      width: 25vw;
      .detail {
        display: flex;
        flex-direction: column;
        padding: 1.8vh 0.5vw;
        .energy-item-wrap {
          flex: 1;
          overflow: hidden;
          display: flex;
          &:first-child {
            margin-bottom: 1.8vh;
          }
          .energy-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex: 1;
            overflow: hidden;
            margin-right: 5px;
            border-radius: 4px;
            background: linear-gradient(to right, #0071ff, #05308F);
            padding: 5px;
            &:last-child {
              margin-right: 0;
            }
            .top,
            .mid,
            .bottom {
              display: flex;
              align-items: center;
              span {
                font-size: 0.85rem;
                line-height: 0.85rem;
              }
            }
            .top,
            .bottom {
              span {
                &:nth-child(2) {
                  padding: 0 5px;
                  border-bottom: 2px solid #199EFC;
                  margin: 0 5px;
                }
              }
            }
            .mid {
              margin: 5px 0;
              .icon-outer {
                margin: 0 5px;
              }
              p {
                font-size: 0.85rem;
                line-height: 0.85rem;
                padding: 0 5px;
                border-bottom: 2px solid #199EFC;
                margin: 0 5px;
              }
            }
            .item-left {
              font-size: 12px;
              flex: 1;
              overflow: hidden;
              padding: 5px;
              span {
                &:first-child {
                  color: #1DBCFF;
                  font-weight: bold;
                  margin-right: 5px;
                }
              }
              .text-icon-wrap {
                color: #45CBFF;
                padding: 0 5px;
                border-bottom: 2px solid #199EFC;
                display: flex;
                .icon {
                  color: #68DFFF;
                  font-size: 12px;
                }
              }
            }
            .icon-outer {
              position: relative;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: #2669BC;
              &:hover {
                cursor: pointer;
                .inner-icon {
                  transform: scale(1.1) !important;
                }
              }
              .inner {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                padding: 5px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 100;
                .inner-icon {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  border: 3px solid rgba(0, 0, 0, .35);
                  transition: all .2s linear;
                  transform: scale(1);
                }
              }
              &.electric {
                .item-right {
                  background: linear-gradient($electric-circle-color1, $electric-circle-color2, $electric-circle-color3);
                }
                .inner-icon {
                  background: $electric;
                }
              }
              &.water {
                .item-right {
                  background: linear-gradient($water-right, $water-left, $water-right);
                }
                .inner-icon {
                  background: $water-mid;
                }
              }
              &.gas {
                .item-right {
                  background: linear-gradient($gas-right, $gas-left, $gas-right);
                }
                .inner-icon {
                  background: $gas-mid;
                }
              }
              &.heat {
                .item-right {
                  background: linear-gradient($heat-right, $heat-left, $heat-right);
                }
                .inner-icon {
                  background: $heat-mid;
                }
              }
            }
            .item-right {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              padding: 5px;
              animation: rotate 3s linear infinite;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 10;
              &::before {
                content: '';
                width: 100%;
                height: 100%;
                position: relative;
              }
              @keyframes rotate {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            }
          }
        }
      }
    }
</style>
