<template>
  <div class="custom-tit">
    <span class="star">*</span>
    <span>
      <slot></slot>
      ：
    </span>
  </div>
</template>

<style scoped lang="scss">
.custom-tit {
  width: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d767b;
  .star {
    margin-top: 4rem;
  }
}
</style>
