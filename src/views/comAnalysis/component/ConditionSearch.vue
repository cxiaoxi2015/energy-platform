<!-- 条件查询 -->
<template>
  <div class="condition-search">
    <div class="search-header">
      <span>查询条件</span>
      <div class="line-wrap">
        <div class="line"></div>
      </div>
    </div>
    <div class="search-content">
      <div class="label">时间粒度</div>
      <div class="radio-wrap">
        <el-radio-group v-model="radio" @change="handleRadioChange">
          <el-radio :label="1">年</el-radio>
          <el-radio :label="2">月</el-radio>
          <el-radio :label="3">日</el-radio>
        </el-radio-group>
      </div>
      <div class="pick-wrap">
        <el-date-picker
          v-model="dateTime"
          :type="radioType"
          :placeholder="radioPlaceholder"></el-date-picker>
      </div>
      <div class="btn-wrap">
        <el-button type="primary" class="search-btn">查询</el-button>
        <el-button class="reset-btn" @click="handleReset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionSearch',
  mixins: [],
  components: {},
  data () {
    return {
      radio: 2,
      dateTime: ''
    }
  },
  methods: {
    handleRadioChange () {
      this.dateTime = ''
    },

    handleReset () {
      this.radio = 2
      this.dateTime = ''
    }
  },
  computed: {
    radioPlaceholder () {
      switch (this.radio) {
        case 1:
          return '按年查询'
        case 2:
          return '按月查询'
        case 3:
          return '按日查询'
      }
    },

    radioType () {
      switch (this.radio) {
        case 1:
          return 'year'
        case 2:
          return 'month'
        case 3:
          return 'date'
      }
    }
  },
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    .condition-search {
      margin-bottom: 10px;
      padding: 10px;
      .search-header {
        display: flex;
        align-items: center;
        position: relative;
        height: 2rem;
        span {
          font-size: 1rem;
          margin-right: 10px;
          font-weight: 600;
        }
        .line-wrap {
          flex: 1;
          overflow: hidden;
          height: 100%;
          display: flex;
          align-items: center;
          .line {
            width: 100%;
            height: 2px;
            background: #5E7098;
          }
        }
      }
      .search-content {
        display: flex;
        align-items: center;
        padding: 20px 20px 0 20px;
        .label {
          margin-right: 20px;
          font-size: 0.8rem;
        }
        .radio-wrap {
          margin-right: 20px;
          ::v-deep {
            .el-radio__label {
              color: #fff;
            }
            .el-radio__inner {
              background: rgba(0, 0, 0, 0.8);
              border: 1px solid rgba(0, 0, 0, 0.8);
              &::after {
                color: rgba(255, 255, 255, 0.8);
              }
            }
            .el-radio__input {
              &.is-checked {
                .el-radio__inner {
                  border-color: rgba(0, 0, 0, 0.8);
                  background: rgba(0, 0, 0, 0.8);
                }
              }
              &:hover {
                .el-radio__inner {
                  border-color: rgba(0, 0, 0, 0.8);
                }
              }
            }
            .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
              box-shadow: none;
            }
          }
        }
        .pick-wrap {
          margin-right: 15px;
          ::v-deep {
            .el-input__inner {
              background: rgba(0, 0, 0, 0.8);
              border-color: transparent;
              color: #59B2E2;
            }
          }
        }
        .btn-wrap {
          ::v-deep {
            .reset-btn {
              background: transparent;
              color: #fff;
              &:hover {
                background: rgba(0, 0, 0, 0.1);
              }
              &:active {
                border-color: #fff;
              }
            }
          }
        }
      }
    }
    .el-picker-panel {
      color: #fff;
    }
</style>
