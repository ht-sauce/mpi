<template>
  <div class="content">
    <span>页面不存在</span>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.replace('/')
    },
  },
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-flow: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
}
</style>
