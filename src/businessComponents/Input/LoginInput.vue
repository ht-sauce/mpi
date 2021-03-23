<script lang="jsx">
import { defineComponent } from 'vue'
import Props from './props'
import useInput from './useInput'
// 文字选中组件
export default defineComponent({
  emit: ['update:modelValue', 'change'],
  props: Props,
  setup(props, ctx) {
    const { withId, onchange } = useInput(props, ctx)

    const title = () => {
      if (props.title)
        return (
          <>
            <span class="title">{props.title}</span>
            <span class="line" />
          </>
        )
    }
    // 提示信息
    const TipsDom = () => {
      if (props.tips) return <div class="tips">{props.tips}</div>
    }
    return withId(() => (
      <div class="login-input">
        <div class="input-content">
          {title()}
          <label class="input-label">
            <input
              class="input"
              type={props.type}
              maxLength={props.maxlength}
              placeholder={props.placeholder}
              value={props.modelValue}
              onInput={onchange}
            />
          </label>
        </div>
        {TipsDom()}
      </div>
    ))
  },
})
</script>
<style lang="scss" scoped>
$inputColor: #ffd393;
.login-input {
  width: 100%;
  margin-bottom: 20rem;
  color: $inputColor;
  font-size: 15rem;
  background: url('~@/assets/images/login-input.png') no-repeat;
  background-size: 100% 100%;
  .title {
    display: inline-block;
    justify-content: space-between;
    width: 62rem;
    text-align-last: justify;
    white-space: nowrap;
  }
}
.input-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 41rem;
  padding: 0 13.7rem;
  //background: rgba(0, 0, 0, 0.32);
}
.line {
  padding-left: 8rem;
  height: 15rem;
  border-right: #ffd393 1rem solid;
}
.input-label {
  display: inline-block;
  width: 100%;
  height: 100%;
  .input {
    font-size: 15rem;
    color: $inputColor;
    border: none;
    background: transparent;
    outline: none;
    text-align: center;
    width: 100%;
    height: 100%;
    $placeholder: #e4bd83;
    &::-webkit-input-placeholder {
      color: $placeholder;
    }
    :-moz-placeholder {
      color: $placeholder;
    }
    ::-moz-placeholder {
      color: $placeholder;
    }
    :-ms-input-placeholder {
      color: $placeholder;
    }
  }
}
.tips {
  position: absolute;
  color: #ff5353;
  font-size: 10rem;
  line-height: 20rem;
}
</style>
