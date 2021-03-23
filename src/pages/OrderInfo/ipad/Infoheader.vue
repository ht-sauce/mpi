<template>
  <div class="info-header">
    <ReturnPage style="margin-right: auto" />
    <gj-button type="five" style="margin-right: auto">订单详情</gj-button>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import ReturnPage from '@/businessComponents/ReturnPage'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: { ReturnPage, GjButton },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.info-header {
  padding-top: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
