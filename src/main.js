import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import components from '@/components' // 组件库导入
import '@/theme/index.scss' // 主题样式导入

const app = createApp(App)

components(app) // 全局组件注册
app.config.globalProperties.$store = store
app.config.globalProperties.$router = router

app.use(router)
app.use(store)
app.mount('#app')
