<script lang="jsx">
import { defineComponent } from 'vue'
import { Radio } from 'vant'
export default defineComponent({
  name: 'VanRadioCopy',
  components: {
    VanRadio: Radio,
  },
  setup(props, ctx) {
    const slots = {
      default: () => ctx.slots.default && ctx.slots.default(),
    }
    return () => <VanRadio {...ctx.attrs} v-slots={slots} />
  },
})
</script>

<style lang="scss">
.van-radio__icon {
  border-radius: 50%;
  padding: 2rem;
  background: #1b334e;
  .van-icon {
    border: #e9dabe 0.5px solid;
    background: #1b334e;
  }
}
.van-radio__icon--checked {
  .van-icon {
    color: #e9dabe;
    background-color: #8c2020;
  }
}
</style>
