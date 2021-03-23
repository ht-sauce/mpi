import { getCurrentInstance, withScopeId } from 'vue'

export default function (props, ctx) {
  const instance = getCurrentInstance()
  const scopeId = instance.type.__scopeId
  const withId = withScopeId(scopeId)

  const onchange = (e) => {
    const val = e.target.value
    ctx.emit('update:modelValue', val)
    ctx.emit('change', val)
  }

  return {
    withId,
    onchange,
  }
}
