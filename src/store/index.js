import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 对vuex数据持久化存储，避免独立操作loaclstorege

const state = {
  production: process.env.NODE_ENV === 'production',
  user: {
    token: '',
    info: null,
    orgid: null,
  },
  system: {
    orientation: null,
    platform: null,
  },
  services: {
    userApi: 'user-api',
    pureLandApi: 'pure-land-api',
  },
}

const InitState = JSON.parse(JSON.stringify(state)) // 保存初始数据
const mutations = {
  // 数据统一修改，避免多操作函数情况，缺陷：无法精细化操作变量，操作方式类似微信小程序操作
  set_data(state, data) {
    for (const key in data) {
      // console.log(typeof data[key])
      if (Array.isArray(data[key])) {
        state[key] = data[key]
      } else if (typeof data[key] === 'object') {
        state[key] = { ...state[key], ...data[key] } // 保证差异更新
      } else {
        state[key] = data[key]
      }
    }
  },
  // vuex清除数据
  clear_data(state) {
    sessionStorage.clear()
    const stateArr = Object.keys(state)
    stateArr.forEach((key) => {
      state[key] = InitState[key]
    })
  },
}

const actions = {}

export default createStore({
  state,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      key: 'elysianFields',
      storage: {
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: (key) => sessionStorage.removeItem(key),
      },
    }),
  ],
})
