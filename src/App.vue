<template>
  <router-view></router-view>
</template>
<script>
import { defineComponent, computed, watch, onMounted } from 'vue'
import vuex from '@/store'
import { PollingAuth } from '@/Tool/LoginSet'
export default defineComponent({
  setup() {
    // 登陆轮询检测
    const orgid = computed(() => vuex.state.user.orgid)
    watch(
      () => orgid.value,
      (id) => {
        const pollingAuth = new PollingAuth({ orgid: id })
        if (id) pollingAuth.start()
        else pollingAuth?.stop()
      },
      {
        immediate: true,
      },
    )
  },
})
</script>
<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
