<template>
  <div class="user-agreement">
    <div class="header">
      <ReturnPage style="margin-right: auto" />
      <gj-button type="five" class="title">用户协议</gj-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ReturnPage from '@/businessComponents/ReturnPage'
import GjButton from '@/components/Button/ipad'
export default defineComponent({
  components: { ReturnPage, GjButton },
  setup() {},
})
</script>

<style scoped lang="scss">
.user-agreement {
}
.header {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 18.3rem;
  .title {
    margin-right: auto;
    width: 215.8rem;
    height: 46.48rem;
    font-size: 23.24rem;
    letter-spacing: 2rem;
  }
}
</style>
