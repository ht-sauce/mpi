<script lang="jsx">
import { defineComponent, ref } from 'vue'
//import { withScoped } from '@/Mixin/tool'
import { Popup } from 'vant'
export default defineComponent({
  name: 'VanPopupCopy',
  components: {
    VanPopup: Popup,
  },
  emit: ['update:modelValue', 'close'],
  props: {
    modelValue: Boolean,
    close: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    function onclose() {
      ctx.emit('update:modelValue', false)
    }

    return () => (
      <van-popup {...ctx.attrs} show={props.modelValue} close-on-click-overlay={false}>
        <div class="van-popup-copy">
          {props.close && <div class="vpc-close" onClick={onclose} />}
          {ctx.slots.default && ctx.slots.default()}
        </div>
      </van-popup>
    )
  },
})
</script>

<style lang="scss">
.van-popup-copy {
  background: url('~@/assets/images/popup.png') no-repeat;
  background-size: 100% 100%;
}
.van-popup {
  overflow: visible;
}
.vpc-close {
  background: #1b334e;
  border-radius: 50%;
  width: 36.5rem;
  height: 36.5rem;
  position: absolute;
  z-index: 5000;
  top: -18.25rem;
  right: -18.25rem;
  text-align: center;
  line-height: 34rem;
  color: #e9dabf;
  background: url('~@/assets/images/close.png');
  background-size: 100% 100%;
}
</style>
