<template>
  <div class="login">
    <!--登陆操作控制-->
    <div class="login-form-bg">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import { reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
// import CustomizeLifecycle from '@/Mixin/CustomizeLifecycle'
export default {
  components: { LoginForm },
  setup() {
    const data = reactive({})

    // new CustomizeLifecycle({
    //   onBeforeUnmount,
    //   onMounted,
    //   onShow() {},
    //   onReachBottom() {},
    //   onBackPress() {},
    // })

    return {
      ...toRefs(data),
    }
  },
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #919191;
  background: url('~@/assets/images/login-background.jpg') no-repeat;
  background-size: 100% 100%;
}
.login-form-bg {
  width: 710rem;
  height: 710rem;
  background: url('~@/assets/images/login-bg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
