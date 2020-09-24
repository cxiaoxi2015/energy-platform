<!-- 查询结果 -->
<template>
  <div class="search-result">
    <div class="result-header">
      <span>查询结果</span>
      <div class="line-wrap">
        <div class="line"></div>
      </div>
    </div>
    <div class="result-content">
      <div class="content-wrap">
        <PropEnergyCons></PropEnergyCons>
        <EnergyConsTrend></EnergyConsTrend>
      </div>
      <div class="content-wrap">
        <el-table
          :data="energyData"
          border
          style="width: 100%;"
          height="100%">
          <el-table-column
            label="日期"
            prop="date"
            align="center"
          ></el-table-column>
          <el-table-column
            label="耗电量(kwh)"
            prop="electric"
            align="center"
          ></el-table-column>
          <el-table-column
            label="耗水量(t)"
            prop="water"
            align="center"
          ></el-table-column>
          <el-table-column
            label="耗气量(m³)"
            prop="gas"
            align="center"
          ></el-table-column>
          <el-table-column
            label="耗热量(Nm)"
            prop="nm"
            align="center"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import EnergyConsTrend from './EnergyConsTrend'
import PropEnergyCons from './PropEnergyCons'
export default {
  name: 'SearchResult',
  mixins: [],
  components: {
    EnergyConsTrend,
    PropEnergyCons
  },
  data () {
    return {
      energyData: [
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        },
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        },
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        },
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        },
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        },
        {
          date: '2020-05-01',
          electric: '456.23',
          water: '3.15',
          gas: '2.2',
          nm: '--'
        }
      ]
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    .search-result {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      .result-header {
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
      .result-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 10px;
        .content-wrap {
          &:first-child {
            display: flex;
            margin-bottom: 10px;
          }
          &:last-child {
            flex: 1;
            overflow: hidden;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
</style>
