import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/users/me/transactions',
    method: 'get',
    params: query
  })
}

export function sendThankyou(receiver_address, amount, message) {
  // TODO: write usemosaic to config file
  const usemosaic = 'true'
  const data = {
    receiver_address,
    amount,
    message,
    usemosaic
  }
  return request({
    url: '/thanks/send',
    method: 'post',
    data
  })
}
