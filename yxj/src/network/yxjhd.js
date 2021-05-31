import { request } from './request';

export function getActiveUser() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_active_user'
  })
}

export function getAwardList() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_award_list'
  })
}