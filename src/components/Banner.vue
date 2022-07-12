<template>
  <swiper :style="{ height: 3 + 'rem' }" loop pagination>
    <swiper-slide v-for="img in imgs" :key="img">
      <img :src="loadImg(img)" alt="">
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { loadImg } from '@/utils'

defineProps<{
  imgs: string[]
}>()

</script>

<style lang="scss" scoped>
::v-deep(.swiper-pagination-bullet) {
  width: .07rem;
  height: .07rem;
  background: #B3B3B3;
  border-radius: 50%;
  opacity: 1;
}

::v-deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  width: .27rem;
  background: #FFFFFF;
  border-radius: .04rem;
}
</style>