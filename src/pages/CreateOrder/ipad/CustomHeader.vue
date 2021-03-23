<template>
  <div class="header">
    <ReturnPage disabled @click="onReStep" style="margin-right: auto" />
    <div class="step">
      <gj-button class="button" :select="modelValue >= 1">
        <span class="radio">1</span>
        <span>创建形象</span>
      </gj-button>
      <div class="arrow" :class="{ 'arrow-check': modelValue >= 2 }"></div>
      <gj-button class="button" :select="modelValue >= 2">
        <span class="radio">2</span>
        <span>制作视频</span>
      </gj-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue'
import ReturnPage from '@/businessComponents/ReturnPage'
import GjButton from '@/components/Button/ipad'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { ReturnPage, GjButton },
  emit: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  setup(props, ctx) {
    const router = useRouter()
    const updateStep = inject('updateStep')
    function onReStep() {
      switch (props.modelValue) {
        case 1: {
          router.go(-1)
          break
        }
        case 2: {
          updateStep(1)
          break
        }
      }
    }
    return {
      onReStep,
    }
  },
})
</script>

<style scoped lang="scss">
.header {
  margin-top: 23.24rem;
  display: flex;
  align-items: center;
  align-content: center;
}
.step {
  display: flex;
  align-items: center;
  align-content: center;
  margin-right: auto;
  .radio {
    display: inline-block;
    width: 16rem;
    height: 16rem;
    text-align: center;
    line-height: 16rem;
    border-radius: 50%;
    border: #ffeed1 1rem solid;
    margin-right: 4rem;
  }
  .button {
    width: 114.6894rem;
    height: 30.7rem;
    font-size: 12.45rem;
    letter-spacing: 2rem;
  }
  .arrow {
    margin: 0 14rem;
    width: 29.465rem;
    height: 6rem;
    background: url('~@/assets/images/arrows-no.png');
    background-size: 100% 100%;
  }
  .arrow-check {
    background: url('~@/assets/images/arrows.png');
    background-size: 100% 100%;
  }
}
</style>
