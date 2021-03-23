<template>
  <popup-copy @close="onclose" v-model="show">
    <div class="order-confirm">
      <gj-button type="five" class="title">请确认形象信息</gj-button>
      <div class="info">
        <div class="left">
          <div class="input-item">
            <custom-tit>姓名</custom-tit>
            <span>王大壮</span>
          </div>
          <div class="input-item">
            <custom-tit>性别</custom-tit>
            <span>男</span>
          </div>
          <div class="input-line"></div>
          <div class="input-item">
            <custom-tit>年龄</custom-tit>
            <span>90</span>
          </div>
          <div class="input-item">
            <custom-tit>身高</custom-tit>
            <span>180cm</span>
          </div>
          <div class="input-line"></div>
          <div class="image-item">
            <custom-tit>体型</custom-tit>
            <img src="" alt="" />
          </div>
          <div class="image-item">
            <custom-tit>服饰</custom-tit>
            <img src="" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="right-image-item">
            <custom-tit>正面照</custom-tit>
            <img class="just-img" src="" alt="" />
          </div>
        </div>
      </div>
      <div class="tips">
        <div class="line"></div>
        <span class="tips-tit">以上信息确认后，不可更改，请仔细核对</span>
        <div class="line"></div>
      </div>
      <div class="img-list">
        <custom-tit>生活照</custom-tit>
        <ul>
          <template v-for="(item, index) in list" :key="index">
            <li class="img-item">
              <img src="" alt="" />
            </li>
          </template>
        </ul>
      </div>
      <div class="buttons">
        <gj-button type="four" class="but-item" @click="onclose">返回</gj-button>
        <gj-button type="four" class="but-item" select @click="ok">确认</gj-button>
      </div>
    </div>
  </popup-copy>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import PopupCopy from '@/businessComponents/PopupCopy'
import GjButton from '@/components/Button/ipad'
import CustomTit from './CustomTit.vue'
export default defineComponent({
  components: { CustomTit, PopupCopy, GjButton },
  props: {
    formData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup() {
    const data = reactive({
      show: false,
      list: [1, 2, 2, 2, 6, 6, 6, 6],
    })

    let resolveFun = () => null
    let rejectFun = () => null
    // 确认回调数据
    function confirm() {
      data.show = true
      return new Promise((resolve, reject) => {
        resolveFun = resolve
        rejectFun = reject
      })
    }

    function onclose() {
      data.show = false
      rejectFun()
    }

    function ok() {
      data.show = false
      resolveFun()
    }

    return {
      ...toRefs(data),
      confirm,
      onclose,
      ok,
    }
  },
})
</script>

<style scoped lang="scss">
.order-confirm {
  box-sizing: border-box;
  padding: 35rem;
  width: 664rem;
  height: 541.16rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  font-size: 14.11rem;
  .title {
    width: 216rem;
    height: 47rem;
    font-size: 23rem;
  }
}
.info {
  display: flex;

  width: 100%;
  margin-top: 40rem;
  .left,
  .right {
    width: 50%;
    display: flex;
    flex-flow: wrap;
    .input-line {
      width: 100%;
      border-bottom: #d5c29e 1px solid;
    }
  }
  @mixin item() {
    display: flex;
    width: 50%;
    align-items: center;
    padding: 10.375rem 0;
  }
  .input-item {
    @include item();
  }
  .image-item {
    @include item();
    align-items: flex-start;
    > img {
      width: 66.4rem;
      height: 78.85rem;
      background: #e9dabf;
    }
  }
  .right-image-item {
    @include item();
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .just-img {
      width: 100rem;
      height: 132.5rem;
    }
  }
}
.tips {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20.75rem 0;
  .line {
    flex: 1;
    border-bottom: #8c2020 1px dotted;
  }
  .tips-tit {
    font-size: 10.79rem;
    color: #8c2020;
    padding: 0 6.5rem;
  }
}
.img-list {
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-flow: column;
  > ul {
    margin-top: 17.5rem;
    display: flex;
    flex-flow: wrap;
  }
  .img-item {
    width: 50.62rem;
    height: 50.62rem;
    background: #d3c2a3;
    margin: 0 7rem 7rem 0;
  }
}
.buttons {
  margin-top: 18rem;
  .but-item {
    width: 128.65rem;
    height: 46.48rem;
  }
}
</style>
