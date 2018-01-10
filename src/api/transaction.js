import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/users/me/transactions',
    method: 'get',
    params: query
  })
}

export function sendThankyou(receiver_address, amount, message) {
  // TODO: use mosaic
  const data = {
    receiver_address,
    amount,
    message
  }
  return request({
    url: '/thanks/send',
    method: 'post',
    data
  })
}
