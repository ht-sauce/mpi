<script lang="jsx">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    disabled: Boolean,
  },
  setup(props) {
    const router = useRouter()
    function returnPage() {
      !props.disabled && router.go(-1)
    }

    return () => <div onClick={returnPage} class="return-page" />
  },
})
</script>

<style lang="scss">
.return-page {
  width: 40rem;
  height: 38rem;
  background: url('~@/assets/images/return.png') no-repeat;
  background-size: 100% 100%;
}
</style>
