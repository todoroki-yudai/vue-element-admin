import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/users/me/deposits',
    method: 'get',
    params: query
  })
}
