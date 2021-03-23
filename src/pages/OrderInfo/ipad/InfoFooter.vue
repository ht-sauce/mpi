<template>
  <div class="info-footer">
    <div class="left">
      <gj-buttom type="four" error>重新制作</gj-buttom>
    </div>
    <div class="right">
      <gj-buttom type="one">重新制作</gj-buttom>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButtom from '@/components/Button/ipad.vue'
export default defineComponent({
  components: { GjButtom },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.info-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 962rem;
  height: 59.76rem;
  background: #eee1cb;
  box-sizing: border-box;
  padding: 0 36.519rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
