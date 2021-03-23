// 表单校验
export function formCheck(data) {
  try {
    const { mobile, password, newPassword, code, imageCode } = data.formData

    const fimageCode = () => {
      if (!imageCode) {
        data.formRules.imageCode = '请输入验证码'
        return null
      }
      data.formRules.imageCode = ''
    }
    const fmobile = () => {
      if (!mobile) {
        data.formRules.mobile = '请输入账号'
        return null
      }
      // if (mobile.length !== 11) {
      //   data.formRules.mobile = '手机号输入不正确'
      //   return null
      // }
      // if (!/^[0-9]*$/.test(mobile)) {
      //   data.formRules.mobile = '请输入数字'
      //   return null
      // }
      data.formRules.mobile = ''
    }

    const fpassword = () => {
      if (!password) {
        data.formRules.password = '请输入密码'
        return null
      }
      data.formRules.password = ''
    }
    const fnewPassword = () => {
      if (!newPassword) {
        data.formRules.newPassword = '请输入密码'
        return null
      }
      data.formRules.newPassword = ''
    }
    const fcode = () => {
      if (!code) {
        data.formRules.code = '请输入验证码'
        return null
      }
    }

    switch (data.loginType) {
      case 'password': {
        // 忘记密码
        if (data.isForgetPassword) {
          fmobile()
          fcode()
          fnewPassword()
        } else {
          fmobile()
          fpassword()
          fimageCode()
        }
        break
      }
      case 'mobile': {
        fmobile()
        fcode()
        break
      }
    }

    const rmobile = data.formRules.mobile
    const rpassword = data.formRules.password
    const rnewPassword = data.formRules.newPassword
    const rcode = data.formRules.code
    const rimageCode = data.formRules.imageCode

    if (rmobile || rpassword || rnewPassword || rcode || rimageCode) return Promise.reject()

    data.formRules = {}
    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e)
  }
}
