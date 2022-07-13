<template>
  <div>
    <div class="banner">
      <p class="mb-40 fs-40 font-bold text-white">关于我们</p>
      <p class="desc">在同行竞争中脱颖而出，为传统企业找到新的业绩增长点！</p>
    </div>
    <Title title="公司介绍" en="COMPANY INTRODUCTION" />
    <p class="fs-38 mt-80 mb-50 text-center">徐州星跃联动网络科技有限公司</p>
    <p class="fs-22 px-30 p1">
      火客是一家集资源整合，优质货源，销售渠道，资源互换，招商加盟，线下广告，线下场地，免费福利，新媒体账号转让，网站转让，域名转让，异业合作，项目对接，流量变现，投放广告等一体的综合性资源平台，平台成立至今成交项目达上万余个，在广告主寻找乙方以及流量主寻找甲方的对接中体现出了强大的资源整合实力。
    </p>
    <div class="flex px-14 mt-50 mb-40">
      <img src="../assets/tu1@2x.webp" alt="" class="mr-12 img1">
      <div>
        <img src="../assets/tu2@2x.webp" alt="" class="mb-12 img2">
        <img src="../assets/tu3@2x.webp" alt="" class="img3">
      </div>
    </div>
    <div class="div2">
      我们激情四射，底蕴丰厚；我们活力无限，耐得住寂寞；<br /> 我们满怀理想，脚踏实地，讲求效率，关注实现； <br />我们创想无限，我们拒绝平庸！
    </div>
    <Title title="联系我们" en="CONTACT US" class="contact" />
    <div class=" text-center">
      <p class="p3">电话：400-888-9999</p>
      <p class="p3">联系邮箱：tiantian@163.com</p>
      <p class="p3">合作联系：18511169119</p>
      <p class="p3">公司地址：江苏省徐州市泉山区徐州软件园C-1-B204</p>
    </div>
    <img src="../assets/ditu.webp" alt="" class="map">
  </div>
</template>
<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.banner {
  height: 3rem;
  background: url('@/assets/guanyu-@2x.webp') no-repeat;
  background-size: contain;
  text-align: center;
  padding-top: .97rem;

  .desc {
    color: #E5E5E5;
    font-size: .2rem;
  }
}

.color-1F1F1F {
  color: #1F1F1F;
}

.color-8F8F8F {
  color: #8F8F8F;
  line-height: .33rem;
}

.p1 {
  color: #787878;
  line-height: .37rem;
}

.img1 {
  width: 4.55rem;
  height: 3.96rem;
}

.img2 {
  width: 2.55rem;
  height: 2.64rem;
}

.img3 {
  width: 2.54rem;
  height: 1.19rem
}

.div2 {
  margin: 0 .15rem;
  background: #E6F0FF;
  border-radius: 7px;
  padding: .37rem .2rem .37rem .22rem;
  color: #2473E3;
  line-height: .42rem;
  font-size: .24rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #2473E3;
    width: .06rem;
  }
}

.p3 {
  font-size: .24rem;
  color: #010101;
  margin-top: .34rem;
}

::v-deep(.contact) {
  margin: 1.24rem auto .4rem;
}

.map {
  margin: .62rem auto 1.07rem;
  width: 7.23rem;
  height: 4.72rem;
}
</style>