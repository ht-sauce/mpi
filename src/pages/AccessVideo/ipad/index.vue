<template>
  <div class="access-video">
    <ElysianFieldsTitle />
    <video-border class="video-one">
      <video class="fin-video"></video>
    </video-border>
    <gj-button class="button" type="one" select>下载</gj-button>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import ElysianFieldsTitle from '@/businessComponents/ElysianFieldsTitle'
import GjButton from '@/components/Button/ipad'
import VideoBorder from '@/businessComponents/VideoBorder/index.vue'
export default defineComponent({
  components: { ElysianFieldsTitle, GjButton, VideoBorder },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.access-video {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: url('~@/assets/images/gl-background.png') no-repeat 100% 100%;
  .video-one {
    margin-top: 30rem;
    width: 563.985rem;
    height: 332rem;
  }
  .fin-video {
    width: 100%;
    height: 100%;
    background: red;
  }
  .button {
    margin-top: 40rem;
  }
}
</style>
