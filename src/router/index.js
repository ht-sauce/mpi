import vuex from '@/store'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { usePlatform } from '@/Tool/client/usePlatform'

import Ipad from './ipad'
import Mobile from './mobile'
import Pc from './pc'

// 决定跳转哪个平台
const system = usePlatform()
vuex.commit('set_data', { system }) // 分享当前平台信息

const { publicPath } = require('../../config/base.js')

const routes = [
  {
    path: '/',
    name: '/',
    redirect: { name: '/ipad' }, // 默认ipad端
  },
  {
    path: '/:catchAll(.*)', // 页面不存在指向
    name: '/404',
    component: () => import('@/pages/404'),
  },
  ...Ipad,
  ...Mobile,
  ...Pc,
]

const router = createRouter({
  history: createWebHistory(publicPath),
  routes,
})

// 路由守卫控制应该跳转哪个平台
router.beforeEach((to, form, next) => {
  const { auth, title } = to.meta ?? {}

  document.title = title ? title : '极乐世界'

  switch (auth) {
    case false: {
      // 不需要授权即可访问的页面
      next()
      break
    }
    default: {
      // platform: mobile,pc,ipad
      const prefix = system.platform
      const login = `/${prefix}/login`

      if (vuex.state.user.info) {
        if (to.path === login) {
          next({
            name: `/${prefix}`,
          })
        } else next()
      } else {
        if (to.path === login) next()
        else
          next({
            name: login,
          })
      }
    }
  }
})

export default router
