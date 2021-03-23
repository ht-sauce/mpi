<template>
  <div class="settlement">
    <div class="left">
      <div class="je">
        <span class="tit">总金额：</span>
        <span class="money">122131321</span>
        <span class="rmb">元</span>
      </div>
      <div class="num">总数：23条</div>
    </div>
    <div class="right">
      <gj-buttom type="one">结算</gj-buttom>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButtom from '@/components/Button/ipad.vue'
export default defineComponent({
  components: {
    GjButtom,
  },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.settlement {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 962rem;
  height: 60rem;
  background: #eee1cb;
  box-sizing: border-box;
  padding: 0 36.519rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  .num,
  .je {
    margin: 4rem 0;
  }
  .num {
    font-size: 11rem;
  }
  .je {
    font-size: 14.11rem;
    .money {
      font-size: 20.75rem;
      color: #8c2020;
    }
    .rmb {
      padding-left: 4rem;
      color: #8c2020;
    }
  }
}
</style>
