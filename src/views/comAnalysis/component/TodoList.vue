<!-- 待办事项 -->
<template>
  <div class="to-do-list">
    <div class="title">
      <span class="icon"></span>
      <a>待办事项</a>
    </div>
    <ul class="to-do-list-content">
      <li v-for="(item, index) in list" :key="index">
        <p>{{ item.content }}</p>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  mixins: [],
  components: {},
  data () {
    return {
      list: [
        {
          content: '凭澜苑2栋301水表疑似通讯异常，等待维修',
          time: '2020-09-23 23:00:00'
        },
        {
          content: '邻水苑3栋401水表数据异常，等待维修',
          time: '2020-09-24 09:00:00'
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
    .to-do-list {
      padding: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
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
      .to-do-list-content {
        flex: 1;
        overflow: hidden;
        padding: 10px;
        li {
          display: flex;
          align-items: center;
          padding: 10px 0;
          margin-bottom: 5px;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          &:hover {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            p,
            span {
              color: #EBB51C;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
          p {
            flex: 1;
            margin-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.8rem;
          }
          span {
            font-size: 0.8rem;
          }
        }
      }
    }
</style>
