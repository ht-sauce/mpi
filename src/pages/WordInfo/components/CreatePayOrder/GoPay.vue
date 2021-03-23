<template>
  <div class="go-pay">
    <div class="title">请扫描下方二维码付款</div>
    <div class="canvas"></div>
    <div class="moneny">
      <span class="tit">支付金额：</span>
      <span class="rmb">¥</span>
      <span class="sum">9999</span>
    </div>
    <gj-button class="button" @click="jumpPage">选择支付方式</gj-button>
    <van-radio-group class="pay-type" v-model="pay" direction="horizontal">
      <van-radio-copy class="pay-type-item" :name="1">支付宝</van-radio-copy>
      <van-radio-copy class="pay-type-item" :name="2">微信</van-radio-copy>
    </van-radio-group>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, inject } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
import VanRadioCopy from '@/businessComponents/VanRadioCopy'
import { RadioGroup } from 'vant'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    VanRadioGroup: RadioGroup,
    GjButton,
    VanRadioCopy,
  },
  setup() {
    const data = reactive({
      pay: 1,
    })
    const router = useRouter()

    const paySuccess = inject('paySuccess')

    function jumpPage() {
      paySuccess()
      router.push({ name: '/ipad/create-order' })
    }

    return {
      ...toRefs(data),
      jumpPage,
    }
  },
})
</script>

<style scoped lang="scss">
.go-pay {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  .title {
    margin-top: 10rem;
    color: #1b334e;
    font-size: 24.9rem;
    letter-spacing: 2rem;
    margin-bottom: 5rem;
  }
  .canvas {
    margin: 27.4rem;
    width: 174.3rem;
    height: 174.3rem;
    background: red;
  }
}
.moneny {
  font-size: 14.11rem;
  .rmb {
    color: #8c2020;
  }
  .sum {
    font-size: 24.9rem;
    color: #8c2020;
  }
}
.button {
  margin-top: 24rem;
  width: 107.07rem;
  height: 24rem;
}
.pay-type {
  margin-top: 20rem;
  color: #1b334e;
  font-size: 14rem;
  .pay-type-item {
    margin: 0 20rem;
  }
}
</style>
