import vuex from '@/store'
import router from '@/router'
import service from '@/services'
import { usePlatform } from './client/usePlatform'
import { Toast } from 'vant'

// 退出登陆
async function loginOut(orgid) {
  try {
    await service.UserApi.login.out({ orgid })
    // 决定跳转哪个平台
    const system = usePlatform()
    vuex.commit('set_data', { system }) // 分享当前平台信息
    const prefix = system.platform
    const login = `/${prefix}/login`

    vuex.commit('clear_data')
    router.push({ path: login })
  } catch (e) {
    return Promise.reject(e)
  }
}

// 轮询权限
class PollingAuth {
  orgid
  timeout
  constructor({ orgid, time = 5000 }) {
    this.orgid = orgid
    this.timeout = time
  }
  timeint = 0
  runing = false
  start() {
    try {
      const orgid = this.orgid
      const timeout = this.timeout

      if (!orgid) return null

      this.runing = true

      let result
      let pollingAuthIn = false // 是否接口请求中

      const authquery = () => {
        if (!this.runing) return null
        this.timeint = window.setInterval(async () => {
          try {
            pollingAuthIn = true
            if (pollingAuthIn && vuex.state.user.orgid)
              result = await service.UserApi.login.pollingAuth({ error: false })
            // console.log(result)
            pollingAuthIn = false
          } catch (e) {
            pollingAuthIn = false
            // 错误则退出轮询
            !this.runing && Toast.fail(e?.message ? e.message : '您的账号在别处登陆')
            clearTimeout(this.timeint)
            loginOut(orgid)
          }
        }, timeout)
      }
      authquery()
    } catch (e) {
      return Promise.reject(e)
    }
  }
  stop() {
    this.runing = false
    this.timeint && clearTimeout(this.timeint)
  }
}

export { loginOut, PollingAuth }
