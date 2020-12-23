import axios from '@/utils/axios'

// 根据scCode查询车辆信息
export function selectAdaptToSys (data) {
  return axios({
    url: 'inquire/rcdComponent/selectAdaptToSys',
    method: 'get',
    params: data
  })
}
