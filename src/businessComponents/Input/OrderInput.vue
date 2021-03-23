<script lang="jsx">
import { reactive, toRefs, defineComponent } from 'vue'
import props from './props'
import useInput from './useInput'
export default defineComponent({
  props,
  setup(props, ctx) {
    const data = reactive({})
    const { withId, onchange } = useInput(props, ctx)

    return withId(() => {
      return (
        <div class="order-input">
          <span class="title">{props.title}</span>
          <label class="label-input">
            <input
              class="input"
              maxLength={props.maxlength}
              placeholder={props.placeholder}
              value={props.modelValue}
              onInput={onchange}
            />
            <van-icon name="chat-o" />
          </label>
        </div>
      )
    })
  },
})
</script>

<style scoped lang="scss">
.order-input {
  font-size: 12.45rem;
  color: #162340;
  margin-right: 20.75rem;
  display: flex;
  align-items: center;
  .title {
    margin-right: 11.62rem;
  }
  .label-input {
    display: flex;
    align-items: center;
    background: #e9dabf;
    height: 30.71rem;
    width: 182.6rem;
    padding: 0 7.055rem;
  }
  .input {
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    $placeholder: #7f7e7f;
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
</style>
