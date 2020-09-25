<!-- 综合分析 -->
<template>
  <div class="comprehensive-analysis">
    <div class="content-left">
      <div class="search-wrap">
        <ConditionSearch></ConditionSearch>
      </div>
      <div class="result-wrap">
        <SearchResult></SearchResult>
      </div>
    </div>
    <div class="content-right">
      <div class="warning-wrap">
        <Warning></Warning>
      </div>
      <div class="to-do-list-wrap">
        <TodoList></TodoList>
      </div>
      <div class="rank-wrap">
        <Rank></Rank>
      </div>
    </div>
  </div>
</template>

<script>
import ConditionSearch from './component/ConditionSearch'
import SearchResult from './component/SearchResult'
import Warning from './component/Warning'
import TodoList from './component/TodoList'
import Rank from './component/Rank'
export default {
  name: 'comprehensiveAnalysis',
  mixins: [],
  components: {
    ConditionSearch,
    SearchResult,
    Warning,
    TodoList,
    Rank
  },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  mounted () {},
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
    @import '~styles/variable.scss';
    .comprehensive-analysis {
      width: 100%;
      height: 100%;
      background: url("~assets/images/bg-0923.jpg") no-repeat;
      background-size: 100% 100%;
      color: #fff;
      display: flex;
      padding: 1.3vw 1.1vw;
      .content-left {
        display: flex;
        flex-direction: column;
        width: 75vw;
        margin-right: 10px;
        border-top-left-radius: 10px;
        .search-wrap {
          background: rgba(0, 0, 0, 0.1);
          border: 2px solid $border-color;
          margin-bottom: 10px;
          border-radius: 4px;
          border-top-left-radius: 10px;
        }
        .result-wrap {
          flex: 1;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.1);
          border: 2px solid $border-color;
          border-radius: 4px;
        }
      }
      .content-right {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        border-top-right-radius: 4px;
        .warning-wrap {
          height: 28vh;
          margin-bottom: 10px;
          border: 2px solid $border-color;
          background: rgba(255, 255, 255, 0.1);
          border-top-right-radius: 10px;
        }
        .to-do-list-wrap {
          max-height: 28vh;
          margin-bottom: 10px;
          border: 2px solid $border-color;
          background: rgba(255, 255, 255, 0.1);
        }
        .rank-wrap {
          flex: 1;
          overflow: hidden;
          border: 2px solid $border-color;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
</style>
