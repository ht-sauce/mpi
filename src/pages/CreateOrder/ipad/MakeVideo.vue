<template>
  <MakeLoaing ref="MakeLoaing" />
  <div class="make-video-firame">
    <div id="make-video-qiankun"></div>
    <div>
      <gj-button type="four" class="button">保存草稿</gj-button>
      <gj-button type="four" select class="button" @click="openMakeLoaing">一键合成</gj-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, defineComponent, inject } from 'vue'
import GjButton from '@/components/Button/ipad'
import MakeLoaing from './MakeLoaing/index.vue'
export default defineComponent({
  components: {
    GjButton,
    MakeLoaing,
  },
  setup() {
    const data = reactive({})

    const updateStep = inject('updateStep')
    function onStep(step) {
      updateStep(step)
    }

    const MakeLoaing = ref('MakeLoaing')
    function openMakeLoaing() {
      MakeLoaing.value.open()
    }

    return {
      ...toRefs(data),
      MakeLoaing,
      openMakeLoaing,
    }
  },
})
</script>

<style scoped lang="scss">
.make-video-firame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 44rem;
  .button {
    width: 128.65rem;
    height: 46.48rem;
    font-size: 18.3rem;
  }
}
#make-video-qiankun {
  width: 100%;
  height: 100%;
  background: #e9dabf;
}
</style>
