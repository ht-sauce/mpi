// 参考https://www.yuque.com/cv8igf/oy3c8b/lwkq82
import DhtCopy from './directive'

export default {
  install(app) {
    app.directive('dht-copy', DhtCopy)
  },
  directive: DhtCopy,
}
