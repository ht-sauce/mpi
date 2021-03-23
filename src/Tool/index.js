import { Toast } from 'vant'

export function getUUID() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export class Loading {
  loadingInstance = null
  constructor() {
    this.stop()
  }
  start() {
    if (this.loadingInstance) return null
    this.loadingInstance = Toast.loading({
      duration: 0,
      forbidClick: true,
      message: '加载中...',
    })
  }
  stop() {
    setTimeout(() => {
      if (this.loadingInstance) {
        this.loadingInstance.clear()
        this.loadingInstance = null
      }
    }, 60)
  }
}
