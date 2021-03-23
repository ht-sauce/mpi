<script lang="jsx">
import { defineComponent } from 'vue'
import { Popover } from 'vant'
export default defineComponent({
  name: 'GjPopover',
  emit: ['select'],
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    VanPopover: Popover,
  },
  setup(props, ctx) {
    function onselect(item) {
      ctx.emit('select', item)
    }

    const slots = {
      default: () => (
        <div class="gj-popover">
          <ul class="gj-popover-ul">
            {props.list.map((item, index) => {
              return (
                <li key={index} onClick={() => onselect(item)}>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
      ),
      reference: () => ctx.slots.default && ctx.slots.default(),
    }

    return () => {
      return <VanPopover {...ctx.attrs} v-slots={slots} />
    }
  },
})
</script>

<style lang="scss">
.gj-popover {
  color: #fee4ae;
  width: 106.24rem;
  //height: 74.7rem;
  background: #1b334e;
  font-size: 12.45rem;
  padding: 3.32rem;
  .gj-popover-ul {
    border: #e9dabf 0.5rem solid;
  }
  .gj-popover-ul > li {
    text-align: center;
    padding: 7.885rem 3.735rem;
  }
}
</style>
