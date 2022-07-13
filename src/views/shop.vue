<template>
  <div>
    <img src="../assets/yiingysd@2x.webp" alt="" class="banner">
    <Title title="应用商店广告介绍" en="APP STORE ADVERTISING" />
    <div class="div1">
      <img src="../assets/ios@2x.webp" alt="" class="img1">
      <div>
        <p class=" mt-4 fs-28 color-1F1F1F">苹果应用商店广告（ASA）</p>
        <p class="color-8F8F8F fs-24 mt-26">
          苹果ASA广告是通过关键词竞价的方式，在AppStore搜索结果的顶部展示广告，我们将协助客户进行开户审核，构建账户和广告系列，并通过投放数据分析，不断改进ASA广告投放效果。</p>
      </div>
    </div>
    <div class="div1">
      <img src="../assets/anzhuop@2x.webp" alt="" class="img1">
      <div>
        <p class=" mt-4 fs-28 color-1F1F1F">安卓应用市场推广（CPD）</p>
        <p class="color-8F8F8F fs-24 mt-26">
          安卓CPD广告是按照下载收费的方式，在安卓应用市场（华为、小米、oppo、vivo）搜索、推荐、活动区展示广告，我们将提供账户搭建、投放选词、竞价管理、数据监测、预算优化服务。</p>
      </div>
    </div>
    <p class=" text-center fs-40 font-bold p2">哪些应用商店可以提升下载量？</p>
    <img src="../assets/yingysd_@2x.webp" alt="" class="mb-80">
    <Team />
    <Flow />
  </div>
</template>
<script setup lang="ts">
import Flow from '@/components/Flow.vue';
import Title from '@/components/Title.vue';
import Introduce from '@/components/Introduce.vue';
import Card from '@/components/Card.vue';
import Team from '@/components/Team.vue';

const introduces = [
  { img: 'baidu@2x.webp', title: '百度', content: '1、百度是国内拥有强大互联网基础的领先搜索引擎，月活跃用户达6亿。<br/>2、百度在国内覆盖用户面广，针对性强，能捕获精准用户，定向推广。' },
  { img: 'sougou@2x.webp', title: '搜狗', content: '1、中国第二大搜索引擎，5.11亿无线月活跃用户。<br/>2、独享腾讯、知乎等优质资源，输入法、浏览器自带流量，助力企业精准推广 。' },
  { img: 'guge@2x.webp', title: '谷歌', content: '1、全球最大的搜索引擎，覆盖全球88%的网民。<br/>2、广告覆盖全球200多个国家和地区，日均60亿广告展示，是企业外贸推广的重要渠道。' },
  { img: '360@2x.webp', title: '360浏览器', content: '1、360手机浏览器用户量突破1.5亿的。<br/>2、60广告有着海量的流量，覆盖在全国的互联网用户，可以从优质的资源，先一步的直达客户！' },
  { img: 'ucllq@2x.webp', title: 'UC', content: '1、全球使用量最大的第三方手机浏览器，4亿无线月活跃用户。<br/>2、UC头条广告平台信息流日曝光量可高达40亿。并且广告投放价格也相对较低。' },
  { img: 'QQllq@2x.webp', title: 'QQ浏览器', content: '1、是腾讯旗下一款浏览器。现拥有月活跃账户2.8亿。<br/>2、是目前手机浏览器市场占有率第一的超级入口，也是用户量高速增长的新兴原生资讯广告场景。' },
]
</script>

<style lang="scss" scoped>
.banner {
  height: 3rem;
}

.color-1F1F1F {
  color: #1F1F1F;
}

.color-8F8F8F {
  color: #8F8F8F;
  line-height: .33rem;
}

.div1 {
  display: flex;
  width: 7.09rem;
  margin: 0 auto;
  margin-bottom: .27rem;
  height: 2.61rem;
  background: #FEFEFF;
  border: 1px solid #C1C9DF;
  border-radius: .08rem;
  padding: .28rem .24rem 0 .4rem;

  .img1 {
    width: .86rem;
    height: .86rem;
    margin-right: .26rem;
  }
}
.p2 {
  margin: 1.39rem 0 .72rem;
}
</style>