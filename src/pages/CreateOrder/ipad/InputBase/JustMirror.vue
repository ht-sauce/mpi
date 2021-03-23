<template>
  <div class="just-mirror">
    <div class="tips">视频制作完成后，该项不支持再次修改</div>
    <div class="upload">
      <div class="upload-img">
        <img v-if="modelValue" src="" alt="" />
        <span v-else>点击上传</span>
      </div>
      <div class="demo">
        <div class="tit">示例</div>
        <img class="img" src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Uploader } from 'vant'
export default defineComponent({
  components: {
    VanUploader: Uploader,
  },
  props: {
    modelValue: String,
  },
  setup() {
    function afterRead(file) {
      console.log(file)
    }
    return {
      afterRead,
    }
  },
})
</script>

<style scoped lang="scss">
.just-mirror {
  margin-top: 4rem;
  .tips {
    font-size: 11.62rem;
    color: #8c2020;
  }
  .upload {
    display: flex;
    margin-top: 18.675rem;
    margin-bottom: 22.825rem;
  }
}
.upload-img {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14.94rem;
  color: #7d6e53;
  background: #d3c2a3;
  width: 103.54rem;
  margin-right: 24.9rem;
  > img {
    width: 100%;
    height: 100%;
  }
}
.demo {
  display: flex;
  flex-flow: column;
  align-items: center;
  .tit {
    font-size: 11.62rem;
  }
  .img {
    background: red;
    width: 90.3621rem;
    height: 119.52rem;
  }
}
</style>
