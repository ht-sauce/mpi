<template>
  <div class="video-border">
    <div class="border-one">
      <div class="border-two">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.video-border {
  background: #e9dabf;
  box-sizing: border-box;
  padding: 7.47rem;
  .border-one {
    width: 100%;
    height: 100%;
    border: #1b334e 1px solid;
    box-sizing: border-box;
    padding: 5.81rem;
    .border-two {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: #1b334e 0.5px solid;
      padding: 8.715rem;
    }
  }
}
</style>
