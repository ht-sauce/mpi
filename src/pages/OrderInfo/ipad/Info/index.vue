<template>
  <div class="info">
    <info-item title="">
      <BoxOne style="flex: 1" title="姓名" content="王大壮" />
      <BoxOne style="flex: 1" end title="服饰" content="王大壮" />
    </info-item>
    <info-item title="退款信息">
      <BoxOne title="姓名" content="王大壮" />
      <BoxOne title="性别" content="王大壮" />
      <BoxOne end title="服饰" content="王大壮" />
      <div class="bottom-border"></div>
      <BoxOne title="联系人" content="王大壮" />
      <BoxOne style="flex: 1" end title="期望时间" content="王大壮" />
    </info-item>
    <info-item title="联系人信息">
      <BoxOne title="联系人" content="王大壮" />
      <BoxOne title="手机号" content="王大壮" />
      <BoxOne end title="期望时间" content="王大壮" />
    </info-item>
    <info-item title="形象信息">
      <BoxOne title="姓名" content="王大壮" />
      <BoxOne title="性别" content="王大壮" />
      <BoxOne end title="服饰" content="王大壮" />
      <div class="bottom-border"></div>
      <box-one style="height: 200rem" title="人像">
        <img class="portrait" src="" alt="" />
      </box-one>
      <box-one end style="flex: 1; height: 200rem" title="生活照">
        <ul class="img-ul">
          <template v-for="(item, index) in imgList" :key="index">
            <li class="img-li"></li>
          </template>
        </ul>
      </box-one>
      <div class="bottom-border"></div>
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="身高" content="王大壮" />
      <BoxOne end title="体型" content="王大壮" />
    </info-item>
    <info-item title="订单信息">
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <div class="bottom-border"></div>
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <div class="bottom-border"></div>
      <BoxOne title="备注" style="flex: 1" content="王大壮" />
    </info-item>
    <info-item title="视频信息">
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <BoxOne title="年龄" content="王大壮" />
      <div class="bottom-border"></div>
      <BoxOne title="备注" style="flex: 1" content="王大壮" />
    </info-item>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import InfoItem from './InfoItem.vue'
import BoxOne from './BoxOne.vue'
export default defineComponent({
  components: { InfoItem, BoxOne },
  setup() {
    const data = reactive({
      imgList: [1, 2, 3, 4, 4, 1, 2, 3, 4, 4],
    })
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss">
@import 'Gl.scss';
.info {
  margin-top: 18.675rem;
  background: #e9dabf;
  padding: 0 23rem;
  color: #1b334e;
  margin-bottom: 100rem;
  .portrait {
    width: 133.63rem;
    height: 176.79rem;
  }
  .img-ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 12rem;
    box-sizing: border-box;
    .img-li {
      width: 81.5rem;
      height: 81.5rem;
      background: #c8b696;
    }
  }
}
</style>
