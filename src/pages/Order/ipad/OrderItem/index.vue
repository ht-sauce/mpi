<template>
  <div class="order-item">
    <img class="img" src="" alt="" />
    <div class="content">
      <div class="top">
        <gj-button class="type">步步高升</gj-button>
        <div class="right">
          <OrderName name="订单编号" orderno="1639234299107889250" />
          <OrderName name="交易流水号" orderno="1639234299107889250" />
        </div>
      </div>
      <div class="info" @click.stop="goOrderInfo">
        <div class="title">
          <span>王先生 </span>
          <span class="line">|</span>
          <span>18279299999</span>
        </div>
        <OrderStatus />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
import OrderName from './OrderName'
import OrderStatus from './OrderStatus'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    GjButton,
    OrderName,
    OrderStatus,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup() {
    const router = useRouter()
    const data = reactive({})
    function goOrderInfo() {
      router.push({ name: '/ipad/order-info' })
    }
    return {
      ...toRefs(data),
      goOrderInfo,
    }
  },
})
</script>

<style scoped lang="scss">
.order-item {
  width: 100%;
  height: 117.86rem;
  background: #e9dabf;
  margin-bottom: 8.3rem;
  box-sizing: border-box;
  padding: 6.64rem;
  display: flex;
}
.img {
  width: 178.45rem;
  height: 104.58rem;
  background: red;
}
.content {
  flex: 1;
  padding: 0 14.53rem;
  color: #1b334e;
  display: flex;
  flex-flow: column;
  .top {
    border-bottom: #deceac 1rem solid;
    padding-bottom: 6.225rem;
    display: flex;
    font-size: 10rem;
    .right {
      display: flex;
      align-items: center;
    }
    .type {
      margin-right: auto;
      font-size: 10.79rem;
      width: 53rem;
      height: 14.11rem;
    }
  }
  .info {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 14.11rem;
      display: flex;
      align-items: center;
    }
    .line {
      padding: 0 4rem;
    }
  }
}
</style>
