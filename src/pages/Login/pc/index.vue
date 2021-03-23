<template>
  <div class="login"></div>
</template>

<script>
import { reactive, toRefs, onBeforeUnmount, getCurrentInstance, onMounted } from 'vue'
import CustomizeLifecycle from '@/Mixin/CustomizeLifecycle'
export default {
  setup() {
    const data = reactive({
      test: 1111,
      onPullDownRefresh: 0,
      onBackPress: 0,
    })

    new CustomizeLifecycle({
      onBeforeUnmount,
      onMounted,
      onShow() {
        console.log('loginshow')
      },
      onReachBottom() {
        console.log('loginbottom')
      },
      onBackPress() {
        data.onBackPress += 1
      },
    })

    return {
      ...toRefs(data),
    }
  },
}
</script>

<style scoped lang="scss">
.login {
}
</style>
