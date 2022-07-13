<template>
  <div>
    <img src="../assets/xxlgg@2x.webp" alt="" class="banner">
    <Title title="信息流广告介绍" en="INTRODUCTION TO INFORMATION FLOW ADVERTISING" />
    <Introduce :introduces="introduces" />
    <img src="../assets/xxlggfn@2x.webp" alt="" class=" mt-70 mb-50">
    <Team />
    <Flow />
  </div>
</template>
<script setup lang="ts">
import Flow from '@/components/Flow.vue';
import Title from '@/components/Title.vue';
import Introduce from '@/components/Introduce.vue';
import Team from '@/components/Team.vue';

const introduces = [
  { img: 'tiktok@2x.webp', title: '抖音', content: '1、抖音是一个音乐创意短视频社交软件，目前用户数量已有6亿+的用户。<br/>2、抖音拥有海量的流量池，抖音CPM以及CPT等多种广告计费方式，广告主可以根据广告预算去选择适合自己广告产品的计费方式，以达到广告成本更优。' },
  { img: 'kuaish@2x.webp', title: '快手', content: '1、快手国内知名的UGC（用户创作内容）短视频社区，注册用户数达7亿。<br/>2、快手信息流广告根据用户在互联网上的行为，运用大数据算法，推断用户的潜在需求，并将用户进行标签化处理。' },
  { img: 'xiaohs@2x.webp', title: '小红书', content: '1、小红书是年轻人的生活方式平台，目前小红书有超2亿月活用户。<br/>2、小红书信息流广告主要分为原生信息流广告与搜索信息流广告，两者都为用户实现了高效种草，用户搜索的主动性更强。' },
  { img: 'weibo@2x.webp', title: '微博', content: '1、微博是基于用户关系的社交媒体平台，目前月活跃用户数为5.73亿。<br/>2、海量入口，直达营销场景，助力企业粉丝和品牌营销。' },
  { img: 'zhihu@2x.webp', title: '知乎', content: '1、知乎是中文互联网知名的可信赖问答社区，截止目前拥有2.8亿注册用户量。<br/>2、知乎广告高效覆盖多类人群，拥有海量数据源与算法技术，精细定向，多样互动。' },
  { img: 'guandt@2x.webp', title: '广点通', content: '1、腾讯拥有丰富的海量流量产品，覆盖用户各个使用场景，7×24小时无缝触达您的目标客户。<br/>2、将海量腾讯系流量、多样形态与营销场景适配，帮助品牌主智能触达各个年龄层用户' },
]
</script>

<style lang="scss" scoped>
.banner {
  height: 3rem;
}

</style>