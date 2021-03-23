<template>
  <CreatePayOrder ref="CreatePayOrder" />
  <video-border class="word-video">
    <div class="word-video-info">
      <div class="video-con">
        <video src=""></video>
      </div>
      <div class="content">
        <div class="text-info">
          <div class="text">经过运镜指引，视线在经过树丛到达仙山的顶部，豁然</div>
          <div class="title">【坐莲池】</div>
        </div>
        <gj-button @click="pay" class="go-place" type="one" select>去下单</gj-button>
      </div>
    </div>
  </video-border>
</template>

<script>
import { ref, reactive, toRefs, defineComponent } from 'vue'
import GjButton from '@/components/Button/ipad'
import CreatePayOrder from '../components/CreatePayOrder/index.vue'
import VideoBorder from '@/businessComponents/VideoBorder/index.vue'
export default defineComponent({
  components: { GjButton, CreatePayOrder, VideoBorder },
  setup() {
    const data = reactive({})
    const CreatePayOrder = ref('CreatePayOrder')

    async function pay() {
      CreatePayOrder.value.Start()
    }
    return {
      ...toRefs(data),
      pay,
      CreatePayOrder,
    }
  },
})
</script>

<style scoped lang="scss">
.word-video {
  width: 100%;
  height: 291.33rem;
  .word-video-info {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
.video-con {
  height: 100%;
  width: 50%;
  background: #69b9ff;
  > video {
    width: 100%;
    height: 100%;
  }
}
.content {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  .go-place {
    margin-top: auto;
    margin-bottom: 24rem;
  }
  .text-info {
    padding: 16rem;
    flex: 1;
    color: #1b334e;
    font-size: 11.62rem;
    display: flex;
    justify-content: flex-end;
    .text {
      line-height: 16rem;
      letter-spacing: 4rem;
      width: 100%;
      height: 170rem;
      writing-mode: vertical-rl;
    }
    .title {
      margin-left: 8.3rem;
      margin-top: -10rem;
      writing-mode: vertical-rl;
      font-size: 16.6rem;
    }
  }
}
</style>
