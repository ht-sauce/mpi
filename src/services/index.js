// 暴露出去的接口地址
import { BaseApi } from './couplingAjax'
import vuex from '@/store/index'

import userApi from './apis/UserApi'
import pureLandApi from './apis/PureLandApi.js'

const services = vuex.state.services

// 针对不同服务进行差异化定制
// https://172.16.103.12/user-api/doc.html#/home
const UserApi = (opt) =>
  BaseApi(opt, { prefix: services.userApi, codeNum: 0, msgField: 'message', codeField: 'code' })
// http://192.168.7.33:8080/pure-land-api/doc.html
const PureLandApi = (opt) =>
  BaseApi(opt, {
    prefix: services.pureLandApi,
    codeNum: '000000',
    msgField: 'message',
    codeField: 'code',
  })

export default {
  UserApi: userApi(UserApi, services),
  PureLandApi: pureLandApi(PureLandApi, services),
}
