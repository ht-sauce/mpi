<template>
  <nav-bar>
    <template v-slot:default="slotProps">
      <router-view :reach="slotProps.reach" />
    </template>
  </nav-bar>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import NavBar from '@/businessComponents/NavBar/ipad/index.vue'
export default defineComponent({
  components: {
    NavBar,
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
.ipad {
  width: 100%;
  height: 100%;
}
</style>
