<template>
  <div>
    <img src="../assets/yiingysd1@2x.webp" alt="" class="banner">
    <Title title="海外广告介绍" en="INTRODUCTION TO OVERSEAS ADVERTISEMENTS" />
    <Introduce :introduces="introduces" />
    <img src="../assets/kefu@2x.webp" alt="" class="img1">
    <div class="bg">
      <p class="color-343434 fs-30 font-bold pt-40 text-center">跨境出海遇到哪些问题？</p>
      <div class="mt-70 flex justify-center">
        <div class="item mr-16">海外广告多少起投？</div>
        <div class="item">广告投放可以免费试投放吗？</div>
      </div>
      <div class=" mt-36 flex justify-center">
        <div class="item mr-16">货币不通怎么解决？</div>
        <div class="item">语言不通看不懂后台？</div>
      </div>
      <div class=" mt-36 flex justify-center">
        <div class="item">不知道海外有哪些买量渠道？</div>
      </div>
      <img src="../assets/yandex_s@2x.webp" alt="" class="bg-img1 bg-img">
      <img src="../assets/bing_s@2x.webp" alt="" class="bg-img2 bg-img">
      <img src="../assets/fac_s@2x.webp" alt="" class="bg-img3 bg-img">
      <img src="../assets/tiktok_s@2x.webp" alt="" class="bg-img4 bg-img">
    </div>
    <button class="help app-flex-center">寻求帮助</button>
    <p class="fs-40 text-center font-bold color-343434 mt-100">火客代运营能给你带来什么？</p>
    <p class=" text-center fs-30 color-707070 mt-34 mb-70">一对一精准服务，点对点解决难题</p>
    <Card />
    <Flow />
  </div>
</template>
<script setup lang="ts">
import Title from '@/components/Title.vue';
import Flow from '@/components/Flow.vue';
import Card from '@/components/Card.vue';

const introduces = [
  { img: 'tiktok@2x.webp', title: 'TikTok', content: '1、是海外版抖音，在全球拥有超过15亿用户。<br/>2、TikTok的广告平台可以接触到全球20多个市场的人群。在TiKToK上你可以用各种形式来创建广告。' },
  { img: 'bing@2x.webp', title: 'Bing', content: '1、微软旗下搜索引擎，全球第二大搜索引擎。<br/>2、在北美、欧洲等地区拥有较高市场份额，同时三大平台同时展示，让客户主动找到您。' },
  { img: 'yandex@2x.webp', title: 'Yandex', content: '1、Yandex是俄罗斯最大的搜索引擎,也是是俄罗斯最大一个以文本为基础的广告投放系统。<br/>2、除了自身的搜索结果页面上投放广告外，它还在构成Yandex广告网络的数千个第三方网站上投放广告。' },
  { img: 'yahoo@2x.webp', title: 'Yahoo', content: '1、日本使用最多的搜索引擎。<br/>2、yahoo广告推广除了在搜索引擎出现，还会出现在联盟网站上面，多途径推广打开日本市场。通过搜索关键词搜索来展现则更加精准。' },
  { img: 'guge@2x.webp', title: 'Google', content: '1、全球最大的搜索引擎，覆盖全球88%的网民。<br/>2、广告覆盖全球200多个国家和地区，日均60亿广告展示，是企业外贸推广的重要渠道。' },
  { img: 'facebook@2x.webp', title: 'Facebook', content: '1、Facebook是一个联系朋友的社交工具。注册用户数超30亿。<br/>2、Facebook全生态流量覆盖 全域触达直连精准客户,社交平台效果加成 轻松将品牌推广到全球。' },
]
</script>

<style lang="scss" scoped>
.banner {
  height: 3rem;
}

.color-707070 {
  color: #707070;
}

.color-343434 {
  color: #343434;
}

.p1 {
  color: #787878;
  line-height: .37rem;
}

.img1 {
  width: 2.31rem;
  height: 2.18rem;
  margin: 1rem auto 0;
}

.bg {
  background: url('@/assets/ditu@2x.webp') no-repeat;
  background-size: contain;
  height: 3.4rem;
  position: relative;

  .bg-img {
    width: .57rem;
    height: .56rem;
    position: absolute;
  }

  .bg-img1 {
    top: .74rem;
    right: 2.39rem;
  }

  .bg-img2 {
    top: 1rem;
    right: .15rem;
  }

  .bg-img3 {
    top: 2.19rem;
    left: 3.26rem;
  }

  .bg-img4 {
    top: 1.12rem;
    left: 1.82rem;
  }
}

.item {
  background: #F1F5F9;
  border: 1px solid #D5DFEA;
  border-radius: .05rem;
  font-size: .21rem;
  color: #343434;
  padding: .08rem .1rem;
}

.help {
  width: 2.66rem;
  height: .62rem;
  background: #4285F4;
  border-radius: .05rem;
  display: flex;
  margin: .4rem auto;
  font-size: .24rem;
  color: white;
}
</style>