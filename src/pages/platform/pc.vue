<template>
  <div class="pc">
    <router-view />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
}
</script>

<style scoped lang="scss">
.pc {
  width: 100%;
  height: 100%;
}
</style>
