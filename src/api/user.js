import request from '@/utils/request'

export function fetchUserBalanceList(query) {
  return request({
    url: '/users/me/balances',
    method: 'get',
    params: query
  })
}

export function getUserBalance() {
  return request({
    url: '/users/balances/latest',
    method: 'get'
  })
}
