<template>
  <div class="crate-order">
    <CustomHeader v-model="step" />
    <div class="content">
      <InputBase ref="InputBase" v-if="step === 1" />
      <MakeVideo v-if="step === 2" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, provide } from 'vue'
import CustomHeader from './CustomHeader.vue'
import InputBase from './InputBase/index.vue'
import MakeVideo from './MakeVideo.vue'
export default defineComponent({
  components: { CustomHeader, InputBase, MakeVideo },
  setup() {
    const data = reactive({
      step: 2,
    })
    // 修改步骤
    function updateStep(step) {
      data.step = step
    }
    provide('updateStep', updateStep)

    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.crate-order {
  height: 100%;
  display: flex;
  flex-flow: column;
  padding-bottom: 20rem;
}
.content {
  flex: 1;
  margin: 20rem 0 15rem 0;
}
</style>
