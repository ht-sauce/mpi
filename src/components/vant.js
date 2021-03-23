import { Icon, Popup } from 'vant'
import 'vant/lib/icon/local.css'

const components = [Icon, Popup]

const install = (app) => {
  components.forEach((el) => {
    app.use(el)
  })
}

export default install
