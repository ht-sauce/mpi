<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GjSelectFrame',
  emit: ['update:modelValue', 'check'],
  props: {
    field: String, // 选中字段
    list: {
      type: Array,
      default() {
        return []
      },
    },
    modelValue: [String, Number],
    close: Boolean, // 是否开启关闭按钮
  },
  setup(props, ctx) {
    function oncheck(item) {
      const val = item[props.field]
      ctx.emit('update:modelValue', val)
      ctx.emit('check', val)
    }
    // 删除一个数据
    function splice(index) {
      ctx.emit('close', index)
    }

    return () => (
      <ul class="gj-select-frame">
        {props.list.map((item, index) => {
          return (
            <li
              class="item"
              class={{ check: props.modelValue === item[props.field] }}
              key={props.field}
              onClick={() => oncheck(item)}
            >
              {props.close && props.modelValue === item[props.field] && (
                <span onClick={() => splice(index)} class="close">
                  X
                </span>
              )}
              {ctx.slots.default && ctx.slots.default(item)}
            </li>
          )
        })}
      </ul>
    )
  },
})
</script>

<style lang="scss">
.gj-select-frame {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .close {
    flex-shrink: 0;
    position: absolute;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #e9dabf;
    width: 17.43rem;
    height: 17.43rem;
    font-size: 14.11rem;
    background: #1b334e;
    right: -6rem;
    top: -6rem;
  }
  .check {
    border: #1b334e 2px solid;
  }
  .item {
    position: relative;
    box-sizing: border-box;
    background: #d3c2a3;
    width: 66.4rem;
    height: 79.265rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
  }
}
</style>
