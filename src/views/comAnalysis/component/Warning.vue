<!-- 告警信息 -->
<template>
  <div class="warning">
    <div class="title">
      <span class="icon"></span>
      <a>告警信息</a>
    </div>
    <div class="warning-content">
      <div class="warning-item">
        <div class="label">
          <div class="label-left">
            <span class="title">设备类</span>
            <span class="count" v-show="warning.totalDev > 0">({{ warning.totalDev }})</span>
          </div>
          <div class="label-right">
            <span>更多</span>
          </div>
        </div>
        <div class="value">
          <el-carousel
            direction="vertical"
            autoplay
            indicator-position="none">
            <el-carousel-item v-for="item in warningData.dev" :key="item.id">
              <div class="table">
                <div class="info-title">
                  <el-tooltip effect="light" :content="item.content" placement="top">
                    <p>{{ item.content }}</p>
                  </el-tooltip>
                </div>
                <div class="info-content">发生时间: {{ item.dateTime }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="warning-item">
        <div class="label">
          <div class="label-left">
            <span class="title">通讯类</span>
            <span class="count" v-show="warning.totalComMun > 0">({{ warning.totalComMun }})</span>
          </div>
          <div class="label-right">
            <span>更多</span>
          </div>
        </div>
        <div class="value">
          <el-carousel
            direction="vertical"
            autoplay
            indicator-position="none">
            <el-carousel-item v-for="item in warningData.comMun" :key="item.id">
              <div class="table">
                <div class="info-title">
                  <el-tooltip effect="light" :content="item.content" placement="top">
                    <p>{{ item.content }}</p>
                  </el-tooltip>
                </div>
                <div class="info-content">发生时间: {{ item.dateTime }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warning',
  mixins: [],
  components: {},
  data() {
    return {
      warning: {
        totalDev: 2,
        totalComMun: 5
      },
      warningData: {
        dev: [
          {
            id: 'dev1001',
            content: '警告：邻水苑3栋401  水表数据异常   显示数据33451',
            dateTime: '2020-09-25 14:00'
          },
          {
            id: 'dev1002',
            content: '警告：邻水苑2栋301  水表数据异常   显示数据33451',
            dateTime: '2020-09-25 15:10'
          }
        ],
        comMun: [
          {
            id: 'comMun1001',
            content: '警告：凭澜苑2栋301  集中器连接异常  通讯时断时连',
            dateTime: '2020-09-24 15:10'
          },
          {
            id: 'comMun1002',
            content: '警告：凭澜苑2栋302  集中器连接异常  通讯时断时连',
            dateTime: '2020-09-24 15:00'
          },
          {
            id: 'comMun1003',
            content: '警告：凭澜苑2栋303  集中器连接异常  通讯时断时连',
            dateTime: '2020-09-25 15:15'
          },
          {
            id: 'comMun1004',
            content: '警告：凭澜苑3栋304  集中器连接异常  通讯时断时连',
            dateTime: '2020-09-25 16:35'
          },
          {
            id: 'comMun1005',
            content: '警告：凭澜苑4栋305  集中器连接异常  通讯时断时连',
            dateTime: '2020-09-25 16:55'
          }
        ]
      }
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
    .warning {
      padding: 10px 0 10px 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      border-top-right-radius: 4px;
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
      .warning-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 10px;
        .warning-item {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          .label {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .label-left {
              display: flex;
              .count {
                color: #EBB51C;
                margin-left: 5px;
                position: relative;
                top: 2px;
              }
            }
            .label-right {
              span {
                padding: 2px 10px;
                font-size: 0.65rem;
                border-radius: 4px;
                opacity: 0.8;
                &:hover {
                  cursor: pointer;
                  opacity: 1;
                  background: rgba(255, 255, 255, 0.5);
                }
              }
            }
          }
          .value {
            display: flex;
            align-items: center;
            flex: 1;
            overflow: hidden;
            .table {
              width: 100%;
              height: 100%;
              .info-title {
                margin-bottom: 10px;
                color: #EBB51C;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .info-content {
                color: #EBB51C;
              }
            }
            ::v-deep {
              .el-carousel {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
</style>
