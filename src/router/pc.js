const pc = '/pc'
export default [
  {
    path: `${pc}/login`,
    name: `${pc}/login`,
    component: () => import('@/pages/Login/pc/index.vue'),
  },
  {
    path: pc,
    name: pc,
    redirect: '',
    component: () => import('@/pages/platform/pc.vue'),
    children: [],
  },
]
