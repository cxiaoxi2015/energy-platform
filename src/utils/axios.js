import axios from 'axios'
import store from '@/store'
// import { MessageBox } from 'element-ui'
import { interfaceUrl } from '@/config'
const getBaseURL = function () {
  return (!sessionStorage.getItem('interfaceURL') || sessionStorage.getItem('interfaceURL') === 'undefined') ? interfaceUrl : sessionStorage.getItem('interfaceURL')
}
const service = axios.create({
  baseURL: getBaseURL()
})
service.interceptors.request.use(config => {
  config.baseURL = getBaseURL()
  config.headers["clientLanguage"] = store.getters.lanId;
  // 如果不为空的话就设置 因为一开始获取token的接口是没有的
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  if (res.headers['content-disposition']) {
    const content = res.headers['content-disposition']
    if (content.indexOf('attachment') > -1) {
      let fileName = content.substring(content.indexOf('filename="') + 10)
      fileName = fileName.substring(0, fileName.lastIndexOf('"'))
      return {
        fileName,
        data: res.data
      }
    } else {
      return res.data
    }
  } else {
    return res.data
  }
}, err => {
  return Promise.reject(err)
})

export default service
