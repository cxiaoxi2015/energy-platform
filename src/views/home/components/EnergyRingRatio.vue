<!-- 能源环比 -->
<template>
  <div class="energy-ring-ratio">
    <div class="content">
      <div class="title">能源环比</div>
      <div class="detail">
        <div class="energy-item-wrap">
          <div class="energy-item">
            <div class="item-left">
              <div class="energy-total-text">
                <span>今日用电</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.electric.today" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.electric.today > energy.electric.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
              <div class="energy-total-text">
                <span>昨日用电</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.electric.yesterday" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.electric.today < energy.electric.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
            </div>
            <div class="item-right-outer electric">
              <div class="item-right"></div>
              <div class="inner">
                <div class="inner-icon iconfont">&#xe631;</div>
              </div>
            </div>
          </div>
          <div class="energy-item">
            <div class="item-left">
              <div class="energy-total-text">
                <span>今日用水</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.water.today" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.water.today > energy.water.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
              <div class="energy-total-text">
                <span>昨日用水</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.water.yesterday" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.water.today < energy.water.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
            </div>
            <div class="item-right-outer water">
              <div class="item-right"></div>
              <div class="inner">
                <div class="inner-icon iconfont">&#xe60b;</div>
              </div>
            </div>
          </div>
        </div>
        <div class="energy-item-wrap">
          <div class="energy-item">
            <div class="item-left">
              <div class="energy-total-text">
                <span>今日用气</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.gas.today" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.gas.today > energy.gas.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
              <div class="energy-total-text">
                <span>昨日用气</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.gas.yesterday" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.gas.today > energy.gas.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
            </div>
            <div class="item-right-outer gas">
              <div class="item-right"></div>
              <div class="inner">
                <div class="inner-icon iconfont">&#xe613;</div>
              </div>
            </div>
          </div>
          <div class="energy-item">
            <div class="item-left">
              <div class="energy-total-text">
                <span>今日热量</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.heat.today" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.heat.today > energy.heat.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
              <div class="energy-total-text">
                <span>昨日热量</span>
                <div class="text-icon-wrap">
                  <countTo :startVal="startVal" :endVal="energy.heat.yesterday" :duration="duration"></countTo>
                  <i class="icon iconfont" v-html="energy.heat.today < energy.heat.yesterday ? '&#xe62b;' : '&#xe62a;'"></i>
                </div>
              </div>
            </div>
            <div class="item-right-outer heat">
              <div class="item-right"></div>
              <div class="inner">
                <div class="inner-icon iconfont">&#xe614;</div>
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
  name: 'EnergyRingRatio',
  mixins: [],
  components: {
    countTo
  },
  data () {
    return {
      startVal: 0,
      duration: 1000,
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
    .energy-ring-ratio {
      width: 22vw;
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
            flex: 1;
            overflow: hidden;
            margin-right: 1vw;
            border-radius: 4px;
            background: linear-gradient(to right, #0071ff, #05308F);
            padding: 5px;
            &:last-child {
              margin-right: 0;
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
            .item-right-outer {
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
                  background: linear-gradient(#1D7CDD, #2F74BD, #4AAAA5);
                }
                .inner-icon {
                  background: #1D7CDD;
                }
              }
              &.water {
                .item-right {
                  background: linear-gradient(#4AAAA5, #2F74BD, #1D7CDD);
                }
                .inner-icon {
                  background: #4AAAA5;
                }
              }
              &.gas {
                .item-right {
                  background: linear-gradient(#2F74BD, #1D7CDD, #4AAAA5);
                }
                .inner-icon {
                  background: #4AAAA5;
                }
              }
              &.heat {
                .item-right {
                  background: linear-gradient(#2F74BD, #4AAAA5, #1D7CDD);
                }
                .inner-icon {
                  background: #2F74BD;
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
