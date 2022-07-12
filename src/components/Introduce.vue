<template>
  <div class="px-14">
    <swiper :style="{ height: 4.79 + 'rem' }" :slides-per-view="2" navigation>
      <swiper-slide v-for="item in introduces" :key="item.content">
        <div class="item">
          <div class="img-wrap app-flex-center">
            <img :src="loadImg(item.img)" alt="" class="img">
          </div>
          <p class="fs-24 font-bold mb-18 text-center">{{ item.title }}</p>
          <div class="content" v-html="item.content"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { loadImg } from '@/utils'

defineProps<{
  introduces: any[]
}>()

</script>

<style lang="scss" scoped>
.item {
  width: 3.5rem;
  height: 4.79rem;
  background: #F5F8FC;
  border-radius: .1rem;
  padding-top: .28rem;
}

.img-wrap {
  width: 1.06rem;
  height: 1.06rem;
  background: #FFFFFF;
  border-radius: .2rem;
  margin: 0 auto .25rem;

  .img {
    width: .6rem;
    height: .6rem;
  }

}

.content {
  font-size: .2rem;
  font-weight: 400;
  color: #393939;
  line-height: .3rem;
  padding: 0 .3rem;
}

::v-deep(.swiper-button-next) {
  color: #B8C7E1;
  right: -0.1rem;
  &::after {
    font-size: .4rem;
    font-weight: bold;
  }
}
::v-deep(.swiper-button-prev) {
  color: #B8C7E1;
  left: -0.1rem;
  &::after {
    font-size: .4rem;
    font-weight: bold;
  }
}
</style>