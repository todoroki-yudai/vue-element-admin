import request from '@/utils/request'

export function registerByUsername(username, email, password) {
  const data = {
    username,
    email,
    password
  }
  return request({
    url: '/users/entry',
    method: 'post',
    data
  })
}
