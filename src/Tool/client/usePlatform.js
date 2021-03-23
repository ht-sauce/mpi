import Client from './Client'

// 判断当前处于什么设备平台
export function JudgmentPlatform() {
  const { system } = Client()
  const { iphone, ipod, ipad, ios, android, nokiaN, winMobile } = system
  //alert(navigator.userAgent)
  // console.log(system)
  // 平板返回
  if (ipad) return 'ipad'
  // 手机端返回
  if (iphone || ipod || ios || android || nokiaN || winMobile) return 'mobile'
  // 都不是则返回pc
  return 'pc'
}
// 判断横屏还是竖屏
export function orientation() {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  // 横
  if (clientWidth >= clientHeight) return 'vertical'
  else return 'transverse' // 竖
}

// 定义rem包含强制横屏
function defineRem(p) {
  const html = document.getElementsByTagName('html')[0]
  const app = document.getElementById('app')
  let share = `calc(100vw / 750)`
  let appFontSize = '14px' // 设置各端字体默认大小
  // 平板拆分为1024份
  if (p === 'ipad') {
    share = `calc(100vw / 1024)`
    appFontSize = '22rem'
  }
  // 手机拆分为750
  if (p === 'mobile') {
    share = `calc(100vw / 750)`
    appFontSize = '30rem'
  }

  // 平板强制横屏
  const HorizontalScreen = () => {
    const app = document.getElementById('app')
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    app.style.transition = 'transform 0.3s'
    const v = orientation()
    // 竖屏的时候强制横屏
    if (v === 'transverse' && p === 'ipad') {
      app.style.width = height + 'px'
      app.style.height = width + 'px'
      app.style.top = (height - width) / 2 + 'px'
      app.style.left = 0 - (height - width) / 2 + 'px'

      app.style.transform = 'rotate(90deg)'
      app.style.transformOrigin = '50% 50%'
      html.style.fontSize = share
    } else {
      // 横屏的时候复原
      app.style.width = width + 'px'
      app.style.height = height + 'px'
      app.style.top = 0
      app.style.left = 0
      app.style.transition = 'rotate(0deg)'
      app.style.transform = 'none'
      app.style.transformOrigin = '50% 50%'
      html.style.fontSize = share
    }
  }
  HorizontalScreen()
  html.style.fontSize = share
  app.style.fontSize = appFontSize
  window.addEventListener('resize', HorizontalScreen)
}
export function usePlatform() {
  const type = JudgmentPlatform()
  // alert(type)
  const platform = {
    mobile: 'mobile',
    ipad: 'ipad',
    pc: 'pc',
  }
  const vt = orientation()

  const p = platform[type]
  defineRem(p)

  return {
    orientation: vt, // 横竖屏
    platform: p, // 手机，平板，电脑
  }
}
