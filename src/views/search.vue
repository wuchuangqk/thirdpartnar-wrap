<template>
  <div>
    <img src="../assets/xxlgg@2x.webp" alt="" class="banner">
    <Title title="搜索广告介绍" en="SEARCH AD INTRODUCTION" />
    <Introduce :introduces="introduces" />
    <img src="../assets/ggfn@2x.webp" alt="" class=" mt-70 mb-50">
    <p class="color-343434 fs-40 font-bold text-center">火客代运营能给你带来什么？</p>
    <p class=" fs-30 mt-30 mb-70 text-center">一对一精准服务，点对点解决难题</p>
    <Card />
    <Flow />
  </div>
</template>
<script setup lang="ts">
import Flow from '@/components/Flow.vue';
import Title from '@/components/Title.vue';
import Introduce from '@/components/Introduce.vue';
import Card from '@/components/Card.vue';

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

.color-343434 {
  color: #343434;
}
</style>