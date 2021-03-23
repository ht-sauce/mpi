<template>
  <div class="life-mirror">
    <div class="upload">
      <img :src="require('@/assets/images/add-icon.png')" alt="" />
    </div>
    <div class="img-list">
      <GjSelectFrame close @close="onclose" v-model="sel" field="id" :list="modelValue" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import GjSelectFrame from '@/components/SelectFrame/ipad'
export default defineComponent({
  components: {
    GjSelectFrame,
  },
  emit: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props, ctx) {
    const data = reactive({
      sel: null,
    })

    function onclose(index) {
      const newlist = props.modelValue
      newlist.splice(index, 1)
      ctx.emit('update:modelValue', newlist)
    }

    return {
      ...toRefs(data),
      onclose,
    }
  },
})
</script>

<style scoped lang="scss">
.life-mirror {
  .upload {
    width: 65.57rem;
    height: 65.57rem;
    background: #d3c2a3;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 16rem;
      height: 16rem;
    }
  }
  .img-list {
    margin-top: 8.715rem;
    display: flex;
    flex-wrap: wrap;
    .img-check {
      border: #1b334e 2px solid;
    }
    .img-li {
      background: #d3c2a3;
      width: 65.57rem;
      height: 65.57rem;
      border-radius: 2rem;
      margin: 0 8.715rem 8.715rem 0;
    }
  }
}
</style>
