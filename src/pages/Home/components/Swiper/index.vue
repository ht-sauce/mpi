<template>
  <swiper
    class="swiper"
    :slides-per-view="3"
    pagination
    centeredSlides
    loop
    slidesPerView="auto"
    :space-between="10"
    :autoplay="autoplay"
  >
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide>
        <div class="swiper-item">{{ index }}</div>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { reactive, toRefs, defineComponent, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/a11y/a11y.scss'

SwiperCore.use([A11y, Autoplay, Pagination])

import 'swiper/swiper.scss'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: Array,
  },
  setup() {
    const data = reactive({
      autoplay: {
        delay: 3000,
      },
    })

    onMounted(() => {
      const sw = document.querySelector('.swiper-wrapper')
      sw.style.transform = 'translate3d(0px, 0px, 0px)'
    })

    return {
      ...toRefs(data),
    }
  },
})
</script>
<style scoped lang="scss">
.swiper {
  width: 800rem;
  position: absolute;
  z-index: 0;
  margin-top: -10rem;
  //background: #0e418c;
  display: flex;
  align-items: center;
  overflow: hidden;
  .swiper-item {
    width: 417.49rem;
    height: 189.24rem;
    color: #fff;
    background-color: #2cc0ff;
    border: #a5ffb2 1rem solid;
  }
  ::v-deep(.swiper-slide) {
    width: 417.49rem !important;
    height: 189.24rem;
  }
  ::v-deep(.swiper-pagination-bullet) {
    background: #fff;
  }
  ::v-deep(.swiper-pagination-bullet-active) {
    background: #fff;
    width: 13.28rem;
    border-radius: 5rem;
  }
}
</style>
