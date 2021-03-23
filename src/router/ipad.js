const ipad = '/ipad'

export default [
  // 登陆页面没有导航页，额外控制导航页麻烦，所以不在路由嵌套中，但是遵循路由规范
  {
    path: `${ipad}/login`,
    name: `${ipad}/login`,
    component: () => import('@/pages/Login/ipad/index.vue'),
  },
  {
    path: `${ipad}/access-video`,
    name: `${ipad}/access-video`,
    component: () => import('@/pages/AccessVideo/ipad/index.vue'),
    meta: {
      auth: false, // 直接访问，不需要权限控制
    },
  },
  {
    path: ipad,
    name: ipad,
    redirect: { name: `${ipad}/home` },
    component: () => import('@/pages/platform/ipad.vue'),
    children: [
      {
        path: `${ipad}/home`,
        name: `${ipad}/home`,
        component: () => import('@/pages/Home/ipad/index.vue'),
      },
      {
        path: `${ipad}/order`,
        name: `${ipad}/order`,
        component: () => import('@/pages/Order/ipad/index.vue'),
      },
      {
        path: `${ipad}/order-info`,
        name: `${ipad}/order-info`,
        component: () => import('@/pages/OrderInfo/ipad/index.vue'),
      },
      {
        path: `${ipad}/word-info`,
        name: `${ipad}/word-info`,
        component: () => import('@/pages/WordInfo/ipad/index.vue'),
      },
      {
        path: `${ipad}/user-agreement`,
        name: `${ipad}/user-agreement`,
        component: () => import('@/pages/UserAgreement/ipad/index.vue'),
      },
      {
        path: `${ipad}/create-order`,
        name: `${ipad}/create-order`,
        component: () => import('@/pages/CreateOrder/ipad/index.vue'),
      },
    ],
  },
]
