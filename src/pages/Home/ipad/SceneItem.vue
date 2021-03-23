<script lang="jsx">
import { getCurrentInstance, defineComponent, withScopeId } from 'vue'
import GjButton from '@/components/Button/ipad.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    GjButton,
  },
  props: {
    scene: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const scopeId = instance.type.__scopeId
    const withId = withScopeId(scopeId)
    const router = useRouter()
    // 跳转详情页
    function jumpInfo() {
      router.push({ name: '/ipad/word-info' })
    }

    return withId(() => {
      return (
        <div class="scene">
          <div class="img">
            <img url={props.scene.img} alt="" />
          </div>
          <gj-button onClick={jumpInfo} class="button">
            {props.scene.name}
          </gj-button>
        </div>
      )
    })
  },
})
</script>

<style scoped lang="scss">
.scene {
  width: 217.46rem;
  height: 157.7rem;
  box-sizing: border-box;
  display: flex;
  background: #e9dabf;
  margin-bottom: 8.3rem;
  flex-flow: column;
  align-items: center;
  &:last-child {
    margin-left: 6rem;
  }
  .img {
    margin: 6.64rem;
    width: 203.35rem;
    height: 119.52rem;
    background: red;
  }
  .button {
    width: 94.38rem;
    height: 20.0279rem;
  }
}
</style>
