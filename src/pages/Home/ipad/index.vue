<template>
  <div class="home">
    <div class="header">
      <ElysianFieldsTitle />
      <UserPopover />
    </div>
    <div class="banner">
      <div class="left-scroll"></div>
      <div class="center">
        <Swiper :list="swiperList" />
      </div>
      <div class="right-scroll"></div>
    </div>
    <van-pull-refresh v-model="RefreshLoading" @refresh="onRefresh">
      <ul class="classify">
        <template v-for="(item, index) in classify" :key="index">
          <li @click="onselectClass(item, index)">
            <gj-button :select="item.isActive">{{ item.name }}</gj-button>
          </li>
        </template>
      </ul>
      <div class="home-content">
        <template v-for="(item, index) in sceneList" :key="index">
          <SenceItem :scene="item" />
        </template>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { toRefs, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { PullRefresh } from 'vant'
import GjButton from '@/components/Button/ipad.vue'
import Swiper from '../components/Swiper/index.vue'
import SenceItem from './SceneItem.vue'
import ElysianFieldsTitle from '@/businessComponents/ElysianFieldsTitle'
import CustomizeLifecycle from '@/Mixin/CustomizeLifecycle'
import useHome from '../useHome.js'
export default defineComponent({
  components: {
    VanPullRefresh: PullRefresh,
    GjButton,
    Swiper,
    SenceItem,
    ElysianFieldsTitle,
  },
  props: {
    reach: Object, // {reachBottom, onscroll}
  },
  setup(props, ctx) {
    const UseHomeFun = useHome(props, ctx)
    // new CustomizeLifecycle({
    //   onBeforeUnmount,
    //   onMounted,
    //   onReachBottom() {
    //     console.log(1)
    //   },
    // })
    return {
      ...toRefs(UseHomeFun.data),
      ...UseHomeFun,
    }
  },
})
</script>

<style scoped lang="scss">
.header {
  position: relative;
  margin-top: 14.11rem;
  height: 67.645rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-scroll,
  .right-scroll {
    position: absolute;
    z-index: 1;
    background: red;
    width: 66.2755rem;
    height: 292.575rem;
  }
  .center {
    margin-top: 4rem;
    margin-left: 40rem;
    width: 800rem;
    height: 260rem;
    background: url('~@/assets/images/swiper-bg.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left-scroll {
    left: 0;
    background: url('~@/assets/images/swiper-left.png') no-repeat 100%/100%;
  }
  .right-scroll {
    right: 0;
    background: url('~@/assets/images/swiper-right.png') no-repeat 100%/100%;
  }
}
.classify {
  margin-left: 19.9rem;
  margin-top: 9.13rem;
  display: flex;
  align-items: center;
  > li {
    margin-right: 8.3rem;
  }
}
.home-content {
  margin-top: 26.97rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: '';
    flex: auto;
  }
}
</style>
