<template>
  <div class="box-one">
    <div class="tit right-border-1">{{ title }}</div>
    <div class="con" :class="{ 'right-border-2': !end }">
      <slot>
        <div>{{ content }}</div>
        <span v-if="copy" class="copy">复制</span>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    copy: Boolean,
    end: Boolean,
    title: String,
    content: String,
    contentWidth: {
      type: String,
      default: '67%',
    },
  },
})
</script>

<style scoped lang="scss">
@import 'Gl';
.box-one {
  width: 33.333%;
  height: 58rem;
  font-size: 14.11rem;
  display: flex;
  align-items: center;
  .tit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108rem;
    height: 100%;
    color: #8c8f8c;
    flex-shrink: 0;
  }
  .con {
    @extend .tit;
    width: calc(100% - 108rem);
    flex-flow: column;
    position: relative;
    color: #1b334e;
  }
  .copy {
    align-self: flex-end;
    margin-top: 6rem;
    margin-right: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 16.6rem;
    font-size: 10.79rem;
    border: #1a324f 1px solid;
    border-radius: 2rem;
  }
}
</style>
