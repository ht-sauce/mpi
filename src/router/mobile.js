const mobile = '/mobile'

export default [
  {
    path: `${mobile}/login`,
    name: `${mobile}/login`,
    component: () => import('@/pages/Login/mobile/index.vue'),
  },
  {
    path: `${mobile}`,
    name: `${mobile}`,
    redirect: '',
    component: () => import('@/pages/platform/mobile.vue'),
    children: [],
  },
]
