<template>
  <div class="nav">
    <Left />
    <reach-bottom @load="onload" @scroll="onscroll" class="content">
      <slot :reach="reach"></slot>
    </reach-bottom>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import Left from './left'
import ReachBottom from '@/components/ReachBottom'
export default defineComponent({
  components: {
    Left,
    ReachBottom,
  },
  setup() {
    const data = reactive({
      // 所有子页面通过动态计算监听数据变化，接收reach
      reach: {
        reachBottom: null, // 页面下滑到底部则数字发生变化
        onscroll: null, // 页面滚动则发生变化
      },
    })
    function onload() {
      data.reach.reachBottom = new Date().getTime()
    }
    function onscroll(e) {
      data.reach.onscroll = e
    }
    return {
      ...toRefs(data),
      onload,
      onscroll,
    }
  },
})
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 0 36.519rem 36.519rem 36.519rem;
    overflow: auto;
    background: url('~@/assets/images/gl-background.png') no-repeat 100% 100%;
  }
}
</style>
