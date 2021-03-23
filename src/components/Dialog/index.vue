<template>
  <popup-copy v-model="show">
    <div class="gj-dialog">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot>{{ tips }}</slot>
      </div>
      <div class="buttons">
        <gj-button v-if="cancel" type="four" class="but-item" @click="onclose">{{
          cancel
        }}</gj-button>
        <gj-button v-if="confirm" type="four" class="but-item" select @click="ok">{{
          confirm
        }}</gj-button>
      </div>
    </div>
  </popup-copy>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import PopupCopy from '@/businessComponents/PopupCopy/index.vue'
import GjButton from '@/components/Button/ipad'
export default defineComponent({
  name: 'GjDialog',
  props: {
    cancel: {
      type: String,
      default: '取消',
    },
    confirm: {
      type: String,
      default: '确认',
    },
  },
  components: {
    PopupCopy,
    GjButton,
  },
  setup() {
    const data = reactive({
      type: 'confirm',
      show: false,
      tips: '',
      title: '',
    })
    let resolveFun = () => null
    let rejectFun = () => null

    function Confirm({ type = 'confirm', message, title }) {
      data.type = type
      data.title = title
      data.tips = message
      data.show = true
      return new Promise((resolve, reject) => {
        resolveFun = resolve
        rejectFun = reject
      })
    }

    function onclose() {
      data.show = false
      rejectFun()
    }

    function ok() {
      data.show = false
      resolveFun()
    }

    return {
      ...toRefs(data),
      Confirm,
      onclose,
      ok,
    }
  },
})
</script>

<style lang="scss">
.gj-dialog {
  width: 286.34rem;
  height: 214.14rem;
  box-sizing: border-box;
  padding: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  font-size: 14.11rem;
  color: #1b334e;
  .title {
    text-align: center;
    font-size: 17rem;
  }
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre-wrap;
    word-break: break-all;
    flex-wrap: wrap;
  }
  .buttons {
    margin-top: 18rem;
    .but-item {
      width: 95.035rem;
      height: 34.7106rem;
    }
  }
}
</style>
