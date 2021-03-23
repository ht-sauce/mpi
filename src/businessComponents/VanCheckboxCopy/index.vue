<script lang="jsx">
import { defineComponent } from 'vue'
import { Checkbox } from 'vant'
export default defineComponent({
  name: 'VanCheckboxCopy',
  components: {
    VanCheckbox: Checkbox,
  },
  setup(props, ctx) {
    const slots = {
      default: () => ctx.slots.default && ctx.slots.default(),
    }
    return () => <VanCheckbox {...ctx.attrs} v-slots={slots} class="van-checkbox-copy" />
  },
})
</script>

<style lang="scss">
.van-checkbox-copy {
  padding: 2rem;
  background: #1b334e;
  border-radius: 2rem;
  .van-checkbox__icon {
    font-size: 14rem;
  }
  .van-checkbox__label {
    margin: 0;
  }
  .van-checkbox__icon--checked .van-icon {
    background-color: #8c2020;
    border-color: #e9dabf;
  }
}
</style>
