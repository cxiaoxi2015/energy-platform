/**
 * @description: 系统配置
 * @date: 2020-09-15 11:00:10
 * @auth: chenxiaoxi
 */

const sysName = '多表合一综合能源监控平台'
const interfaceUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.121:8081/api/'
    : 'http://106.2.13.200:7015/api/'
module.exports = {
  // 系统名称
  sysName,
  // 接口地址
  interfaceUrl
}
