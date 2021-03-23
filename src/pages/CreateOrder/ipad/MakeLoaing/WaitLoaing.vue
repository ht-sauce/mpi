<template>
  <div class="wait-loaing">
    <template v-if="type === 1">
      <div class="type-one">
        <div class="title">合成中</div>
        <div class="video"></div>
        <div class="content"></div>
        <van-loading class="loading" color="#fff" type="spinner" />
      </div>
    </template>
    <template v-if="type === 2">
      <div class="type-two">
        <div class="title">视频制作成功</div>
        <div class="video"></div>
        <div class="download">
          <div class="icon"></div>
          <span class="tit">下载视频</span>
        </div>
        <div class="share">
          <div class="tit">分享链接</div>
          <div class="link">
            <div class="http">https://132132113213211231132132112311231.com</div>
            <div class="copy">复制</div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="type === 3">
      <div class="type-three">
        <div class="title">合成中失败</div>
        <div class="video"></div>
        <gj-button class="retry" select type="four">重试</gj-button>
      </div>
    </template>
    <div class="buts">
      <div class="but-item" @click="goOrder">查看订单</div>
      <div class="but-item" @click="goHome">回到首页</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, inject } from 'vue'
import { Loading } from 'vant'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: {
    VanLoading: Loading,
    GjButton,
  },
  setup() {
    const data = reactive({
      type: 1, //1合成中,2制作成功, 3合成失败
    })
    const onclose = inject('onclose')
    const onCloseBut = inject('onCloseBut')
    const goOrder = inject('goOrder')
    const goHome = inject('goHome')
    onCloseBut(true)

    return {
      ...toRefs(data),
      goOrder,
      goHome,
    }
  },
})
</script>

<style scoped lang="scss">
.wait-loaing {
  width: 352.75rem;
  height: 468.95rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  color: #1b334e;
  .title {
    margin-top: 25rem;
    font-size: 24.9rem;
    text-align: center;
    height: 46.9rem;
  }
  .video {
    width: 291rem;
    height: 163.9rem;
    background: red;
    margin-bottom: 29.88rem;
  }
}
.type-one {
  .loading {
    display: flex;
    justify-content: center;
    margin-top: 60rem;
  }
}
.type-two {
  font-size: 14.11rem;
  .download {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 23rem;
    .icon {
      width: 14.5rem;
      height: 14.5rem;
      background: red;
      margin-right: 4rem;
    }
  }
  .share {
    display: flex;
    align-items: center;
    .tit {
      margin-right: 10rem;
    }
    .link {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #d3c2a3;
      height: 33.2rem;
      padding-left: 10rem;
      padding-right: 6rem;
      box-sizing: border-box;
      .http {
        display: flex;
        align-items: center;
        height: 100%;
        width: 156rem;
        overflow: auto;
        white-space: nowrap;
      }
    }
    .copy {
      width: 41.5rem;
      height: 24.5rem;
      display: flex;
      align-items: center;
      font-size: 10.79rem;
      justify-content: center;
      background: #1b334e;
      color: #e9dabf;
      border-radius: 2rem;
    }
  }
}
.type-three {
  display: flex;
  flex-flow: column;
  align-items: center;
  .retry {
    margin-top: 20rem;
    width: 128.65rem;
    height: 46.48rem;
  }
}
.buts {
  display: flex;
  align-items: center;
  font-size: 14.11rem;
  margin-bottom: 56.855rem;
  .but-item {
    margin: 0 25rem;
    border-bottom: #1b334e 1px solid;
  }
}
</style>
