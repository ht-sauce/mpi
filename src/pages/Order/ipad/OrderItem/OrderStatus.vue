<template>
  <div class="order-status">
    <div class="type">合成中</div>
    <div class="time">2021.02.21 18:30</div>
    <div class="button">
      <gj-button type="four" class="mmax">1321</gj-button>
      <gj-button type="four" select class="mmin">1321</gj-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: { GjButton },
  props: {},
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.order-status {
  box-sizing: border-box;
  padding-top: 12.45rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  color: #8c2020;
  .type {
    font-size: 11rem;
  }
  .time {
    margin: 4rem 0;
    font-size: 9rem;
  }
  .button {
    display: flex;
    align-items: center;
    .mmax,
    .mmin {
      width: 84.66rem;
      height: 31.125rem;
      margin-left: 4rem;
    }
    .mmin {
      width: 57.2rem;
    }
  }
}
</style>
