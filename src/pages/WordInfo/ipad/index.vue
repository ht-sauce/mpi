<template>
  <div class="word-info">
    <div class="header">
      <ReturnPage class="rp-left" />
      <ElysianFieldsTitle class="logo" />
    </div>
    <!--<div class="type">
      <gj-button select>标准版</gj-button>
      <gj-button>宽屏版</gj-button>
    </div>-->
    <WordInfo />
    <ElementItem />
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import ReturnPage from '@/businessComponents/ReturnPage'
import ElysianFieldsTitle from '@/businessComponents/ElysianFieldsTitle'
import GjButton from '@/components/Button/ipad'
import WordInfo from './WordInfo'
import ElementItem from './ElementItem'
export default defineComponent({
  components: {
    ReturnPage,
    ElysianFieldsTitle,
    GjButton,
    WordInfo,
    ElementItem,
  },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14.11rem;
  .rp-left {
    margin-right: auto;
  }
  .logo {
    margin-right: auto;
  }
}
.type {
  margin-top: 14.11rem;
  margin-bottom: 7.055rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
