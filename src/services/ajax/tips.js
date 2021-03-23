import { Toast } from 'vant'
// 消息提示
const Tips = {
  success({ msg = '' }) {
    Toast.success(msg)
  },
  error({ msg = '' }) {
    Toast.fail(msg)
  },
}

export default Tips
