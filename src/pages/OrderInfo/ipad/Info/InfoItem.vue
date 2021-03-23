<template>
  <div class="info-item">
    <span v-if="title" class="tit">【{{ title }}】</span>
    <div class="border">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
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
.info-item {
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 18.3rem 0 12.45rem 0;
  .tit {
    font-size: 19.09rem;
    padding-bottom: 10rem;
  }
  .border {
    width: 100%;
    height: auto;
    border: #c8b696 3px solid;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
