import vant from './vant'
import UserPopover from '@/businessComponents/UserPopover/index.vue'
// 全局组件，一般用不到吧
const GuijiComponents = [UserPopover]
const install = (app) => {
  vant(app)
  // 项目自定义全局组件
  GuijiComponents.forEach((guiji) => {
    app.component(guiji.name, guiji)
  })
}

export default install
