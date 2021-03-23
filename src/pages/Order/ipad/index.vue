<template>
  <div class="order">
    <div class="operation">
      <OrderInput title="代理商" />
      <OrderInput title="日期" />
      <OrderInput placeholder="请输入关键词搜索" />
    </div>
    <div class="classify">
      <gj-popover v-model:show="showPopover" @select="onselect" :list="actions">
        <gj-button select class="button">全部(80)</gj-button>
      </gj-popover>
      <gj-button class="button">待支付(80)</gj-button>
      <gj-button class="button">退款订单(80)</gj-button>
    </div>
    <!--内容列表-->
    <div class="content">
      <template v-for="(item, index) in orderList" :key="index">
        <OrderItem :data="item" />
      </template>
    </div>
    <OrderSettlement />
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import OrderInput from '@/businessComponents/Input/OrderInput'
import GjButton from '@/components/Button/ipad.vue'
import GjPopover from '@/businessComponents/Popover/index.vue'
import OrderItem from './OrderItem/index.vue'
import OrderSettlement from './OrderSettlement.vue'
export default defineComponent({
  components: {
    OrderInput,
    GjButton,
    GjPopover,
    OrderItem,
    OrderSettlement,
  },
  setup() {
    const data = reactive({
      showPopover: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
      orderList: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
    })

    function onselect(item) {
      console.log(item)
    }

    return {
      ...toRefs(data),
      onselect,
    }
  },
})
</script>
<style scoped lang="scss">
.order {
  margin-bottom: 70rem;
}
.operation {
  margin-top: 29rem;
  display: flex;
  align-items: center;
}
.classify {
  margin-top: 26.56rem;
  .button {
    margin-right: 6.225rem;
    width: 106.3396rem;
    height: 23.6218rem;
  }
}
.content {
  margin-top: 20.75rem;
}
</style>
