<!-- 告警信息 -->
<template>
  <div class="warning">
    <div class="title">
      <span class="icon"></span>
      <a>告警信息</a>
    </div>
    <div class="warning-content">
      <div class="warning-item">
        <div class="label">设备类</div>
        <div class="value">
          <div class="table">
            <div class="info-title">警告: 8号锅炉温度过高</div>
            <div class="info-content">发生时间: 21:29</div>
          </div>
        </div>
      </div>
      <div class="warning-item">
        <div class="label">通讯类</div>
        <div class="value">
          <div class="table">
            <div class="info-title">警告: 数据中心连接异常</div>
            <div class="info-content">发生时间: 22:00</div>
          </div>
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
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
    .warning {
      padding: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
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
          .label {
            margin-right: 10px;
            display: flex;
            align-items: center;
          }
          .value {
            display: flex;
            align-items: center;
            flex: 1;
            overflow: hidden;
            .table {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;
              .info-title {
                margin-right: 20px;
                color: #EBB51C;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .info-content {
                color: #EBB51C;
              }
            }
          }
        }
      }
    }
</style>
