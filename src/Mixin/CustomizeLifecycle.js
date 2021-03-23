export default class CustomizeLifecycle {
  // 由于强制横屏的问题，并且单页面统一都在id为app的div下，所以监听appDiv即可
  domApp = document.getElementById('app')
  constructor({
    onShow = () => {}, // 页面显示
    onHide = () => {}, // 页面隐藏
    onPullDownRefresh = () => {}, //监听用户下拉刷新
    onReachBottom = () => {}, // 页面滚动到底部的事件
    onPageScroll = () => {}, // 监听页面滚动
    onBackPress = () => {}, // 监听页面返回,监听返回按键
    // vue生命周期传入
    onBeforeUnmount = null, // vue页面注销生命周期
    onMounted = null, // vue页面加载生命周期
  }) {
    this.onShow = onShow
    this.onHide = onHide
    this.onPullDownRefresh = onPullDownRefresh
    this.onReachBottom = onReachBottom
    this.onPageScroll = onPageScroll
    this.onBackPress = onBackPress

    if (!onBeforeUnmount || !onMounted) return null
    onMounted(() => {
      this.Start()
    })
    onBeforeUnmount(() => {
      this.Stop()
    })
  }
  Start() {
    const app = this.domApp
    // 注入全局生命周期，显示/隐藏
    document.addEventListener('visibilitychange', this._ShowHide)
    app.addEventListener('scroll', this._OnScroll)
    this._onPullDownRefresh()
    window.addEventListener('popstate', this._onBackPress)
  }
  Stop() {
    const app = this.domApp
    document.removeEventListener('visibilitychange', this._ShowHide)
    app.removeEventListener('scroll', this._OnScroll)
    window.removeEventListener('popstate', this._onBackPress)
  }
  _ShowHide = (e) => {
    if (document.visibilityState === 'visible') this.onShow(e)
    else this.onHide(e)
  }
  _currentScroll = 0 // 当前滚动距离，判断上还是下
  _isOnReachBottom = false // 是否触发过滑动到底部事件,保证不会一次性触发多次事件
  _OnScroll = () => {
    const domApp = this.domApp
    const clientHeight = domApp.clientHeight
    const contentHeight = domApp.scrollHeight //内容高度
    const scrollTop = domApp.scrollTop // 滚动距离

    const scollType = scrollTop >= this._currentScroll ? 'down' : 'up'

    const BottomDistance = contentHeight - clientHeight - scrollTop
    // 页面滚动事件
    this.onPageScroll({
      dom: domApp,
      clientHeight,
      contentHeight,
      scrollTop,
      PercentageDown: scrollTop / (contentHeight - clientHeight), // 向下滚动百分比
      BottomDistance: BottomDistance, // 底部距离，px
    })

    //到达底部10px时,页面滚动到底部的事件
    if (!this._isOnReachBottom && scollType === 'down' && BottomDistance <= 10) {
      this._isOnReachBottom = true
      this.onReachBottom()
    }

    if (scollType === 'up') {
      this._isOnReachBottom = false
    }

    this._currentScroll = scrollTop
  }
  _onPullDownRefresh() {
    const app = this.domApp
    // 是否移动端
    const _mobile = 'ontouchstart' in document ? true : false // 是否为移动端
    const mousedown = _mobile ? 'touchstart' : 'mousedown'
    const mousemove = _mobile ? 'touchmove' : 'mousemove'

    let startY = 0
    const touchstart = (e) => {
      startY = _mobile ? e.touches[0].pageY : e.y
      app.addEventListener(mousemove, touchmove)
    }

    const touchmove = (move) => {
      const moveY = _mobile ? move.touches[0].pageY : move.y
      if (this._currentScroll === 0 && moveY - startY > 80) {
        //鼠标弹起来的时候不再移动
        this.onPullDownRefresh('end')
        app.removeEventListener(mousemove, touchmove)
      }
    }
    app.addEventListener(mousedown, touchstart)
  }
  _onBackPress = () => {
    this.onBackPress()
  }
}
