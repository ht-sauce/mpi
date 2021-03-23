<template>
  <div class="left">
    <template v-for="(item, index) in menuData" :key="index">
      <div class="menu-li">
        <gj-button
          style="letter-spacing: 4rem"
          @click="jumpPage(item.path)"
          :select="currentRoute === item.path"
          type="one"
          vertical
          >{{ item.name }}</gj-button
        >
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, getCurrentInstance, watch } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
export default defineComponent({
  components: {
    GjButton,
  },
  setup() {
    const menuData = reactive([
      { name: '首页', path: '/ipad/home' },
      { name: '订单', path: '/ipad/order' },
    ])

    const { proxy } = getCurrentInstance()
    const currentRoute = computed(() => proxy.$route.path)

    function jumpPage(path) {
      proxy.$router.push({ path })
    }

    return {
      menuData,
      currentRoute,
      jumpPage,
    }
  },
})
</script>

<style scoped lang="scss">
.left {
  background: #c9b592;
  width: 62rem;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.menu-li {
  margin: 29rem 0;
}
</style>
