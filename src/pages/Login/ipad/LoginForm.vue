<template>
  <div class="login-form">
    <div class="login-type">
      <TextSelection
        @click="switchLoginType('password')"
        :select="loginType === 'password'"
        title="账号密码登录"
      />
      <TextSelection
        @click="switchLoginType('mobile')"
        :select="loginType === 'mobile'"
        title="短信验证码登录"
      />
    </div>
    <LoginInput
      v-model="formData.mobile"
      maxlength="110"
      title="账号"
      placeholder="请输入账号"
      :tips="formRules.mobile"
    />
    <!--手机登陆状态-->
    <template v-if="loginType === 'mobile'">
      <!--验证码-->
      <SendCode
        v-model="formData.code"
        @send="onSend"
        :count="codeCount"
        v-model:tips="formRules.code"
      />
    </template>
    <!--密码登陆状态-->
    <template v-if="loginType === 'password'">
      <LoginInput
        v-model="formData.password"
        v-show="!isForgetPassword"
        title="密码"
        type="password"
        :tips="formRules.password"
        placeholder="请输入密码"
      />

      <!--如果点击忘记密码-->
      <template v-if="isForgetPassword">
        <!--验证码-->
        <SendCode
          v-model="formData.code"
          @send="onSend"
          :count="codeCount"
          v-model:tips="formRules.code"
        />
        <LoginInput
          v-model="formData.newPassword"
          :tips="formRules.newPassword"
          title="新密码"
          placeholder="设置新密码"
        />
      </template>
      <template v-else>
        <ImgCode
          :tips="formRules.imageCode"
          @cli="getPictureVerify"
          :src="verifySrc"
          v-model="formData.imageCode"
        />
      </template>
      <div class="forget-password" @click="ForgetPassword">忘记密码</div>
    </template>

    <gj-button type="three" class="login" select @click="login">登陆</gj-button>
    <GjDialog ref="gjDialog" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, getCurrentInstance, onBeforeUnmount } from 'vue'
import TextSelection from '../components/TextSelection.vue'
import LoginInput from '@/businessComponents/Input/LoginInput.vue'
import SendCode from '../components/SendCode'
import GjButton from '@/components/Button/ipad.vue'
import ImgCode from '../components/ImgCode.vue'
import { formCheck } from './useLoginForm'
import { getUUID } from '@/Tool'
import api from '@/services'
import GjDialog from '@/components/Dialog/index.vue'
import { Loading } from '@/Tool'
import { encode } from 'js-base64'
import { Toast } from 'vant'
export default {
  components: {
    TextSelection,
    LoginInput,
    SendCode,
    GjButton,
    ImgCode,
    GjDialog,
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const gjDialog = ref('gjDialog')
    const loading = new Loading()
    const data = reactive({
      loginType: 'password', // mobile
      isForgetPassword: false, // 忘记密码
      codeCount: 0, // 倒计时
      verifySrc: '',
      formData: {
        mobile: '',
        password: '',
        newPassword: '',
        code: '',
        imageCode: '',
      },
      formRules: {
        mobile: '',
        password: '',
        newPassword: '',
        code: '',
        imageCode: '',
      },
      loginDisabled: false,
    })

    //-------------------------------操作区域---------------------------------------------------------
    // 切换类型
    function switchLoginType(type) {
      data.formData = {} // 切换类型清空数据
      data.formRules = {}
      data.isForgetPassword = false
      data.loginType = type
    }
    // 忘记密码切换
    function ForgetPassword() {
      data.isForgetPassword = !data.isForgetPassword
      getPictureVerify()
    }
    // 登陆后处理
    function LoginAfter({ user, token }) {
      loading.stop()
      proxy.$store.commit('set_data', {
        user: {
          token: token,
          info: user,
          orgid: user.organizationId,
        },
      })
      proxy.$router.push({ name: '/ipad/home' })
    }
    // 登陆按钮
    async function login() {
      try {
        loading.start()

        await formCheck(data)
        LoginAfter({
          token: 21323132121231,
          user: {
            username: 'dht',
            organizationId: 1,
          },
        })
      } catch (e) {
        loading.stop()
        getPictureVerify()
        e && console.log(e)
      }
    }
    //-------------------------------账号密码处理区域---------------------------------------------------------
    let sessionId = null // 登陆唯一id
    // 获取图片验证码
    const getPictureVerify = async () => {
      sessionId = getUUID()
      data.verifySrc = api.UserApi.login.pictureVerify(sessionId)
    }
    getPictureVerify()
    // 二次验证确认
    async function PasswordLoginHandlerTwo() {
      try {
        await gjDialog.value.Confirm({
          message: '当前账号已在其它地方登录，是否继续登录？',
          title: '提示',
        })
        PasswordLoginHandler(1) // 强制登陆
      } catch (e) {
        // Toast('密码或验证码错误')
        getPictureVerify()
      }
    }
    async function PasswordLoginHandler(isForce = 0) {
      try {
        const res = await PasswordLogin(isForce)

        const { token, user } = res.data ?? {}

        LoginAfter({ user, token })
        loading.stop()
      } catch (e) {
        loading.stop()
        const code = e.data?.code
        if (code && code === 50111) {
          PasswordLoginHandlerTwo()
          return e
        }
        console.log(e)
        Toast('密码或验证码错误')
        getPictureVerify()
      }
    }
    // 账号密码登陆函数
    async function PasswordLogin(isForce = 0) {
      try {
        const { mobile, password, imageCode } = data.formData
        const result = await api.UserApi.login.in(
          {
            data: {
              username: mobile,
              verify: imageCode,
              isForce: isForce, //1强制登录 0普通登录
              password: encode(password),
            },
            error: false,
          },
          sessionId,
        )
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    //-------------------------------手机验证码---------------------------------------------------------
    // 手机验证码区域
    let setIntervalInt = null
    onBeforeUnmount(() => {
      clearInterval(setIntervalInt)
    })
    function onSend() {
      data.codeCount = 60
      setIntervalInt = setInterval(() => {
        data.codeCount--
        if (data.codeCount <= 0) {
          clearInterval(setIntervalInt)
        }
      }, 1000)
    }

    return {
      ...toRefs(data),
      getPictureVerify,
      switchLoginType,
      ForgetPassword,
      login,
      onSend,
      gjDialog,
    }
  },
}
</script>

<style scoped lang="scss">
.login-form {
  position: absolute;
  top: 320rem;
  width: 242rem;
  font-size: 14rem;
  color: #ffd393;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
}
.login-type {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rem;
}
.forget-password {
  width: 100%;
  font-size: 11.7rem;
  margin-bottom: 17.5rem;
  color: #e4bd83;
  text-align: right;
}
.login {
  width: 162rem;
  font-size: 18.3rem;
  height: 36.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
