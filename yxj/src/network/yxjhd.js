import { request } from './request';

// 制作接口
export function getMakeDumpling() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/make_dumpling'
  })
}


// 我的记录列表接口
export function getUserRecord() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_user_record'
  })
}

// 更换阵营接口
export function getchangeTeam() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/change_team'
  })
}

// 每日任务列表接口
export function getDailyTask() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_daily_task'
  })
}

// 活动用户信息接口
export function getActiveUser() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_active_user'
  })
}

// 累计制作奖励列表接口
export function getAwardList() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_award_list'
  })
}

// 选择阵营接口
export function getSelectTeam() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/select_team'
  })
}

// 队伍排行榜信息接口
export function getTeamInfo() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_team_info'
  })
}

// 领取累计制作奖励接口
export function getMakeAward() {
  return request({
    method: 'get',
    url: '/ajax/active_lantern_pk/get_make_award'
  })
}