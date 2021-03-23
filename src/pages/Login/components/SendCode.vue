<script lang="jsx">
import { ref, getCurrentInstance, defineComponent, withScopeId } from 'vue'
import LoginInput from '@/businessComponents/Input/LoginInput.vue'
// 文字选中组件
export default defineComponent({
  emit: ['update:modelValue', 'update:tips', 'change', 'send'],
  components: {
    LoginInput,
  },
  props: {
    modelValue: String, // 手动绑定
    count: {
      type: Number,
      default: 0,
    },
    tips: String,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()
    const scopeId = instance.type.__scopeId
    const withId = withScopeId(scopeId)

    async function sendCode() {
      try {
        await formCheck()
        ctx.emit('send', true)
      } catch (e) {
        console.log(e)
      }
    }

    function formCheck() {
      if (!props.modelValue) {
        ctx.emit('update:tips', '请输入验证码')
        return Promise.reject('请输入验证码')
      }
      if (props.count > 0) return Promise.reject('倒计时中')

      ctx.emit('update:tips', '')
      return Promise.resolve()
    }

    function onchange(val) {
      const value = val.target ? val.target.value : val
      ctx.emit('update:modelValue', value)
      ctx.emit('change', value)
    }

    return withId(() => (
      <div class="send-code">
        <div class="input">
          <LoginInput
            model-value={props.modelValue}
            onChange={onchange}
            placeholder="请输入验证码"
            tips={props.tips}
          />
        </div>
        <div className="button" style={{ opacity: props.count > 0 ? 0.5 : 1 }} onClick={sendCode}>
          {props.count > 0 ? <span>{props.count}s</span> : <span>发送验证码</span>}
        </div>
      </div>
    ))
  },
})
</script>
<style lang="scss" scoped>
.send-code {
  width: 242rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.input {
  width: 139rem;
  height: 100%;
  ::v-deep(.login-input) {
    background: url('~@/assets/images/login-input-s.png') no-repeat;
    background-size: 100% 100%;
  }
}
.button {
  background: url('~@/assets/images/code-but.png') no-repeat 100%/100%;
  color: #162340;
  margin-top: 3rem;
  width: 89rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13.3rem;
}
</style>
