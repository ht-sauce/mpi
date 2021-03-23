<script lang="jsx">
import { getCurrentInstance, defineComponent, withScopeId } from 'vue'
// 文字选中组件
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    select: Boolean, // 是否选中
  },
  setup(props) {
    const instance = getCurrentInstance()
    const scopeId = instance.type.__scopeId
    const withId = withScopeId(scopeId)
    return withId(() => <span class={{ select: props.select }}>{props.title}</span>)
  },
})
</script>
<style lang="scss" scoped>
.select {
  padding: 0 0 1rem 0;
  border-bottom: #ffd393 1rem solid;
}
</style>
