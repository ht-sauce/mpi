<template>
  <popup-copy v-model="show" :close="closeBut" @close="onclose">
    <MakeTips ref="MakeTips" v-if="step === 1" />
    <WaitLoaing ref="WaitLoaing" v-else />
  </popup-copy>
</template>

<script>
import { ref, reactive, toRefs, defineComponent, provide } from 'vue'
import PopupCopy from '@/businessComponents/PopupCopy/index.vue'
import MakeTips from './MakeTips.vue'
import WaitLoaing from './WaitLoaing.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    PopupCopy,
    MakeTips,
    WaitLoaing,
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      step: 1, // 1未进入合成状态,2进入合成等待
      closeBut: false,
      show: false,
    })
    const MakeTips = ref('MakeTips')
    const WaitLoaing = ref('WaitLoaing')
    function goHome() {
      router.replace({ name: '/ipad/home' })
    }
    function goOrder() {
      router.replace({ name: '/ipad/order' })
    }
    function onclose() {
      data.show = false
      if (data.step !== 1) goHome()
    }
    function onCloseBut(closeBut) {
      data.closeBut = closeBut
    }
    function updateStep(step) {
      data.step = step
    }

    function open() {
      // 初始数据
      data.closeBut = true
      updateStep(1)
      data.show = true
    }

    provide('onclose', onclose)
    provide('onCloseBut', onCloseBut)
    provide('updateStep', updateStep)
    provide('goHome', goHome)
    provide('goOrder', goOrder)

    return {
      MakeTips,
      WaitLoaing,
      ...toRefs(data),
      onclose,
      open,
    }
  },
})
</script>

<style scoped lang="scss">
.make-loaing {
}
</style>
