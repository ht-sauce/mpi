<template>
  <div class="image-code">
    <div class="input">
      <LoginInput
        :modelValue="modelValue"
        @change="onchange"
        placeholder="请输入验证码"
        :tips="tips"
      />
    </div>
    <img @click="oncli" class="img" :src="src" alt="" />
  </div>
</template>

<script>
import LoginInput from '@/businessComponents/Input/LoginInput.vue'
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  emit: ['update:modelValue', 'change', 'cli'],
  components: {
    LoginInput,
  },
  props: {
    modelValue: String,
    tips: String,
    src: String,
  },
  setup(props, ctx) {
    const data = reactive({})
    function onchange(val) {
      const value = val.target ? val.target.value : val
      ctx.emit('update:modelValue', value)
      ctx.emit('change', value)
    }
    function oncli() {
      ctx.emit('cli')
    }
    return {
      ...toRefs(data),
      onchange,
      oncli,
    }
  },
})
</script>

<style scoped lang="scss">
.image-code {
  width: 242rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .input {
    width: 139rem;
    height: 100%;
    ::v-deep(.login-input) {
      background: url('~@/assets/images/login-input-s.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .img {
    margin-top: 2rem;
    width: 89rem;
    height: 35rem;
  }
}
</style>
