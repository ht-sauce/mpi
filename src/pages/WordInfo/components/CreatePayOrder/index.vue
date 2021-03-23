<template>
  <popup-copy v-model="show" @close="onclose">
    <div class="create-pay-order">
      <CreateOrder v-if="step === 1" />
      <GoPay v-if="step === 2" />
    </div>
  </popup-copy>
</template>

<script>
import { reactive, toRefs, defineComponent, provide } from 'vue'
import PopupCopy from '@/businessComponents/PopupCopy/index.vue'
import CreateOrder from './CreateOrder.vue'
import GoPay from './GoPay.vue'
export default defineComponent({
  components: {
    PopupCopy,
    CreateOrder,
    GoPay,
  },
  setup() {
    const data = reactive({
      show: false,
      step: 1, // 1填写用户信息，2去支付
    })

    let relsoveFun = () => null
    let rejectFun = () => null
    function Start() {
      data.show = true
      return new Promise((resolve, reject) => {
        relsoveFun = resolve
        rejectFun = reject
      })
    }

    function onclose() {
      data.show = false
      rejectFun()
    }

    function paySuccess() {
      data.show = false
      relsoveFun()
    }

    function updateStep(step) {
      data.step = step
    }
    provide('updateStep', updateStep)
    provide('paySuccess', paySuccess)

    return {
      ...toRefs(data),
      Start,
      onclose,
    }
  },
})
</script>

<style scoped lang="scss">
.create-pay-order {
  width: 360rem;
  height: 500rem;
  box-sizing: border-box;
  padding: 32rem 22rem 22rem 22rem;
}
</style>
