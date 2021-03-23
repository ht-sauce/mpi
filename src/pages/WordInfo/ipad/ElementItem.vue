<template>
  <div class="element-item">
    <div class="type">
      <gj-button select>元素</gj-button>
      <gj-button>服饰</gj-button>
    </div>
    <ul class="list">
      <template v-for="(item, index) in list" :key="index">
        <li class="el-item">
          <img alt="" src="" />
          <div class="bt-con">
            <gj-button class="bt" vertical>刻晴甘雨凝光</gj-button>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjButton from '@/components/Button/ipad'
export default defineComponent({
  components: {
    GjButton,
  },
  setup() {
    const data = reactive({
      list: [1, 2, 342, 4343, 342, 434, 342, 434, 434],
    })
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
.element-item {
  display: flex;
  flex-flow: column;
  align-items: center;
  .type {
    margin: 10.79rem 0 18.26rem 0;
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.el-item {
  width: 214.97rem;
  height: 151.89rem;
  background: #e9dabf;
  margin-bottom: 11.6rem;
  padding: 7.055rem;
  box-sizing: border-box;
  display: flex;
  > img {
    width: 144.6109rem;
    height: 137.78rem;
  }
  .bt-con {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .bt {
    height: 104.6rem;
  }
}
</style>
