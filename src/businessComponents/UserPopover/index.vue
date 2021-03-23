<template>
  <div class="user-info-fixed">
    <gj-popover
      trigger="manual"
      @select="onselect"
      placement="bottom-end"
      :list="list"
      v-model:show="userInfoShow"
    >
      <div @click="onClickUser" class="user-info"></div>
    </gj-popover>
  </div>
</template>

<script>
import { ref, defineComponent, computed, onBeforeUnmount, onMounted } from 'vue'
import vuex from '@/store/index'
import { loginOut } from '@/Tool/LoginSet'
import GjPopover from '@/businessComponents/Popover'
export default defineComponent({
  name: 'UserPopover',
  components: {
    GjPopover,
  },
  setup() {
    const userInfoShow = ref(false)
    const username = computed(() => vuex.state.user && vuex.state.user.info?.username)
    const list = ref([
      { name: username, type: 'account' },
      { name: '退出', type: 'out' },
    ])

    async function logout() {
      try {
        await loginOut(vuex.state.user.orgid)
      } catch (e) {
        console.log(e)
      }
    }

    function onClickUser() {
      userInfoShow.value = !userInfoShow.value
    }

    function onselect(item) {
      const { type } = item
      switch (type) {
        case 'out': {
          logout()
          break
        }
      }
    }

    return {
      list,
      userInfoShow,
      onClickUser,
      onselect,
    }
  },
})
</script>

<style scoped lang="scss">
.user-info-fixed {
  position: absolute;
  z-index: 5000;
  right: 0;
  flex-shrink: 0;
  width: 50rem;
  height: 50rem;
  background: url('~@/assets/images/user.png') no-repeat;
  background-size: 100% 100%;
  .user-info {
    z-index: 10;
    box-sizing: border-box;
    padding: 7.47rem;
    border-radius: 50%;
    width: 49.8rem;
    height: 49.8rem;
    //background: #c9b592;
  }
}
.user-info-pop {
  color: #fee4ae;
  width: 106.24rem;
  //height: 74.7rem;
  background: #1b334e;
  font-size: 12.45rem;
  padding: 3.32rem;
  .user-info-pop-ul {
    border: #e9dabf 0.5rem solid;
  }
  .user-info-pop-ul > li {
    text-align: center;
    padding: 7.885rem 3.735rem;
  }
}
</style>
