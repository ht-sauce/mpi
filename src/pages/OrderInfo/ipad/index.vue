<template>
  <div class="order-info">
    <Infoheader />
    <video-border class="video-info">
      <div class="header-vide">
        <div class="video"></div>
        <div class="video-type">
          <gj-button type="four" class="title">做莲池</gj-button>
          <VideoState />
        </div>
      </div>
    </video-border>
    <Info />
    <InfoFooter />
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import Infoheader from './Infoheader.vue'
import VideoBorder from '@/businessComponents/VideoBorder/index.vue'
import GjButton from '@/components/Button/ipad.vue'
import VideoState from './VideoState.vue'
import Info from './Info/index.vue'
import InfoFooter from './InfoFooter.vue'
export default defineComponent({
  components: { Infoheader, VideoBorder, GjButton, VideoState, Info, InfoFooter },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.video-info {
  width: 100%;
  height: 291.33rem;
  margin-top: 23rem;
  .header-vide {
    width: 100%;
    height: 100%;
    display: flex;
    .video {
      height: 100%;
      width: 50%;
      background: red;
    }
    .video-type {
      height: 100%;
      width: 50%;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .title {
      margin-top: 14rem;
      width: 112.05rem;
      height: 33.2rem;
      font-size: 19rem;
    }
  }
}
</style>
