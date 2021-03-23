<template>
  <div class="make-tips">
    <template v-if="type === 1">
      <div class="type-one">
        <img class="sigh" :src="require('@/assets/images/sigh-icon.png')" alt="" />
        <div class="tips">您只有3次合成机会，请确认信息无误后再合成视频</div>
        <div class="buts">
          <gj-button class="but-item" @click="onclose" type="four">取消</gj-button>
          <gj-button class="but-item" type="four" @click="ok" select>确认合成</gj-button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="type-two">
        <span class="title">温馨提示</span>
        <span class="two-tips">将在后台继续为您合成视频，您可以在订单中查看详情</span>
      </div>
    </template>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, inject } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: {
    GjButton,
  },
  setup() {
    const data = reactive({
      type: 1, // 确认弹窗，2提示
    })
    const onclose = inject('onclose')
    const onCloseBut = inject('onCloseBut')
    const updateStep = inject('updateStep')

    function ok() {
      onCloseBut(false)
      data.type = 2
      setTimeout(() => {
        updateStep(2)
      }, 100)
    }

    return {
      ...toRefs(data),
      ok,
      onclose,
    }
  },
})
</script>

<style scoped lang="scss">
.make-tips {
  width: 286.34rem;
  height: 214.14rem;

  color: #1b334e;
}
@mixin tips() {
  text-align: center;
  width: 214.14rem;
  font-size: 14.11rem;
  letter-spacing: 2rem;
  line-height: 17rem;
  margin: 7rem 0;
}
.type-one {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  .sigh {
    width: 66.4rem;
    height: 66.4rem;
  }
  .tips {
    @include tips();
  }
  .buts {
    margin-top: 6rem;
    width: 214.14rem;
    display: flex;
    justify-content: space-between;
    .but-item {
      width: 95.035rem;
      height: 34.7106rem;
    }
  }
}
.type-two {
  display: flex;
  flex-flow: column;
  align-items: center;
  .title {
    margin-top: 20rem;
    font-size: 19.09rem;
  }
  .two-tips {
    @include tips();
    margin-top: 36rem;
    text-align: left;
  }
}
</style>
