import request from '@/utils/request'

export function registerByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'http://localhost:18080/api/v1.0/users/entry', // TODO: move base url to config
    method: 'post',
    data
  })
}
