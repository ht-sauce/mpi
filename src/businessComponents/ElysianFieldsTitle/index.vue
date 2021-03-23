<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => <div class="elysian-fields-title" />
  },
})
</script>

<style lang="scss">
.elysian-fields-title {
  position: relative;
  width: 337rem;
  height: 71rem;
  background: url('~@/assets/images/logo.png') no-repeat 100%/100%;
}
</style>
