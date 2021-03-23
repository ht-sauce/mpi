<template>
  <div class="order-name">
    <span class="name">{{ name }}</span>
    <span class="no">{{ orderno }}</span>
    <div class="copy">复制</div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
    orderno: [Number, String],
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
.order-name {
  display: flex;
  align-items: center;
  margin-right: 27.38rem;
  .name {
    padding-right: 6rem;
  }
  .copy {
    margin-left: 9.545rem;
    padding: 2rem 6.225rem;
    border: 1rem #1a324f solid;
    border-radius: 4rem;
  }
}
</style>
