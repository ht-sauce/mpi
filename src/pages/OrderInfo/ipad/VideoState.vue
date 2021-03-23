<template>
  <div class="video-state">
    <template v-if="type === 1">
      <div class="one">
        <div class="type-tit">制作成功</div>
        <ul class="icon-ul">
          <li class="icon-li">
            <img :src="require('@/assets/images/dowlond.png')" alt="" />
            <span>下载视频</span>
          </li>
          <li class="icon-li">
            <img :src="require('@/assets/images/share-icon.png')" alt="" />
            <span>分享链接</span>
          </li>
          <li class="icon-li">
            <img :src="require('@/assets/images/QRcode-icon.png')" alt="" />
            <span>保存二维码</span>
          </li>
        </ul>
      </div>
    </template>
    <template v-if="type === 2">
      <div class="two">制作中</div>
    </template>
    <template v-if="type === 3">
      <div class="three">合成中</div>
    </template>
    <template v-if="type === 4">
      <div class="four">
        <div class="type-tit type-err">合成失败</div>
        <gj-button class="rest" type="four" select>重新合成</gj-button>
      </div>
    </template>
    <template v-if="type === 5">
      <div class="five type-err">退款申请中</div>
    </template>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: { GjButton },
  setup() {
    const data = reactive({
      type: 5, // 1完成,2制作中,3合成中,4合成失败
    })
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.video-state {
  width: 100%;
  height: 100%;
  color: #1b334e;
  font-size: 25rem;
  .type-tit {
    margin: 30rem 0;
  }
  .type-err {
    color: #8c2020;
  }
}
@mixin numType() {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
}

.one {
  @include numType();
  .icon-ul {
    display: flex;
    align-items: center;
  }
  .icon-li {
    font-size: 14.11rem;
    display: flex;
    flex-flow: column;
    margin: 0 16rem;
    > img {
      width: 60rem;
      height: 60rem;
      margin-bottom: 2rem;
    }
  }
}
.two {
  @include numType();
}
.three {
  @include numType();
}
.four {
  @include numType();
  .rest {
    margin-top: 20rem;
    width: 100rem;
    height: 37rem;
    font-size: 14rem;
  }
}
.five {
  @include numType();
}
</style>
