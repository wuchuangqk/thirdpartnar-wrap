<template>
  <div>
    <Banner :imgs="['bannner_1@2x.png', 'bannner_2@2x.png']" />
    <div class="grid gap-12 grid-cols-4 px-12 mt-26 mb-70">
      <div class="div1">
        <img src="../assets/jiangbei@2x.png" alt="" class="img1">
        <div>
          <p class="title">10年<span>+</span></p>
          <p class="desc">互联网行业经验</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/piinpai@2x.png" alt="" class="img1">
        <div>
          <p class="title">1000<span>+</span></p>
          <p class="desc">累计服务品牌</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/tuandui@2x.png" alt="" class="img1">
        <div>
          <p class="title">1000<span>+</span></p>
          <p class="desc">营销服务团队</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/zhanghu@2x.png" alt="" class="img1">
        <div>
          <p class="title">2000<span>+</span></p>
          <p class="desc">日活跃推广账户</p>
        </div>
      </div>
    </div>
    <Title title="业务范围" en="SCOPE OF BUSINESS" />
    <div ref="parentRef" class=" overflow-auto px-16 pb-16 flex flex-nowrap app-hide-bar">
      <div v-for="(item, index) in links" :key="item.label" :ref="setLinksDom" class="link"
        :class="{ active: item.label === activeLink.label }" @click="setActive(index)">{{
            item.label
        }}</div>
    </div>
    <p class="color-595959 px-20 mt-36 p1">
      {{ activeLink.content }}
    </p>
    <div>
      <img :src="loadImg(activeLink.img)" alt="" class="img2" :class="activeLink.imgClass">
    </div>
    <Title title="我们的优势" en="OUR STRENGTHS" />
    <div class=" px-12 mb-80">
      <div class="div2">
        <img src="../assets/zhengheyx@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">团队多年移动互联网广告推广经验，专业为广告主提供移动互联网整合营销一站式服务。</p>
        </div>
      </div>
      <div class="div2">
        <img src="../assets/jingztf@2x.png" alt="" class="img3 right">
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">分析每个产品的优势针对投放地区的用户行为更有针对性的进行投放。</p>
        </div>
        <div class="div2-1"></div>
      </div>
      <div class="div2">
        <img src="../assets/scdongcha@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">对用户行为、推广方式、数据表现及优化方面等具有丰富的实践经验。</p>
        </div>
      </div>
      <div class="div2">
        <img src="../assets/ggyh@2x.png" alt="" class="img3 right">
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">业内顶尖的优化团队对各大广告主流平台具有丰富的全球投放及优化经验。</p>
        </div>
        <div class="div2-1"></div>
      </div>
      <div class="div2">
        <img src="../assets/shujfx@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">通过检测、统计等手段，来分析广告素材，关键词等投放效果。</p>
        </div>
      </div>
    </div>
    <Flow />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Title from '@/components/Title.vue';
import Banner from '@/components/Banner.vue';
import { loadImg } from '@/utils';
import Flow from '@/components/Flow.vue';

const links = [
  { label: '信息流广告代运营', content: '现有主流的信息流广告包括：抖音广告、快手广告、小红书广告、知乎广告等。信息流推广代运营，数字化营销，精准触达目标客户，帮企业降低获客成本，获取海量客户。', img: 'xinxiliu@2x.png', imgClass: 'bus-img1' },
  { label: '搜索广告代运营', content: '现有主流搜索广告包括：百度、搜狗、谷歌、360浏览器、UC浏览器、QQ浏览器等。搜索竞价推广做为目前付费推广最有效的方式之一，受到众多传统企业青睐。搜索引擎竞价推广代运营服务也成为了当前广告代运营服务中重要的板块！', img: 'sousuoguang@2x.png', imgClass: 'bus-img2' },
  { label: '应用商店代运营', content: '现有主流的应用商店广告包括：iOS、华为、vivo、oppo、小米、360推广等，苹果ASA广告是通过关键词竞价的方式，在AppStore搜索结果的顶部展示广告。安卓CPD广告是按照下载收费的方式，在安卓应用市场（华为、小米、oppo、vivo）搜索、推荐、活动区展示广告。', img: 'yingyongshad@2x.png', imgClass: 'bus-img3' },
  { label: '海外广告代运营', content: '现有主流海外广告包括：TikTok、微软Bing、Yandex、Yahoo、Google、Facebook等。海外广告投放对于中国出口企业海外推广至关重要，企业要想率先赢战海外市场就必须要通过海外广告更好的展示产品信息和企业形象，是推广品牌的必要因素。', img: 'haiwaigg@2x.png', imgClass: 'bus-img4' },
]
const activeLink = ref<{
  label: string,
  content: string,
  img: string,
  imgClass: string,
}>(links[0])
const parentRef = ref<HTMLElement>()
const linksDom: HTMLElement[] = []
const setLinksDom = (el: HTMLElement) => {
  linksDom.push(el)
}
const setActive = (index: number) => {
  activeLink.value = links[index]
  const el = linksDom[index]
  // 让父元素滚动，使得所点击元素置中
  const parentPaddingLeft = 8
  let scrollLeft = el.offsetLeft - parentPaddingLeft
  // @ts-ignore
  const { offsetWidth, scrollWidth } = parentRef.value
  if (scrollLeft + offsetWidth > scrollWidth) {
    scrollLeft = scrollWidth - offsetWidth
  }
  if (parentRef.value.scrollLeft === scrollLeft) {
    return
  }
  const isAdd = scrollLeft > parentRef.value.scrollLeft
  const callback = () => {
    if ((isAdd && parentRef.value.scrollLeft >= scrollLeft)
      || (!isAdd && parentRef.value.scrollLeft <= 0)) {
      return
    }
    if (isAdd) {
      parentRef.value.scrollLeft += 4
    } else {
      parentRef.value.scrollLeft -= 4
    }
    requestAnimationFrame(callback)
  }
  requestAnimationFrame(callback)
}
</script>

<style lang="scss" scoped>
.div1 {
  background: #EEF2F8;
  border-radius: .09rem;
  padding: .2rem .06rem;
  display: flex;

  .title {
    font-size: .24rem;
    color: #4285F4;
    display: flex;
    align-items: flex-end;
  }

  .desc {
    font-size: .16rem;
    margin-top: .08rem;
  }

  .img1 {
    width: .44rem;
    height: .44rem;
    margin-right: .07rem;
  }
}

.link {
  font-size: .24rem;
  color: #474747;
  position: relative;
  flex: 0 0 auto;
  margin-right: .5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    font-weight: bold;
    color: #1A1A1A;

    &::after {
      content: '';
      position: absolute;
      width: .33rem;
      height: .05rem;
      background: #4285F4;
      border-radius: .03rem;
      bottom: -.12rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.p1 {
  line-height: .33rem;
}

.img2 {
  margin: .6rem auto .8rem;
  width: 4.87rem;
  height: auto;
  &.bus-img1 {
    width: 4.26rem;
  }
}

.div2 {
  margin-bottom: .2rem;
  display: flex;
  border: 1px solid #C1C9DF;
  position: relative;
  height: 1.71rem;

  .div2-1 {
    width: 3.08rem;
  }

  .p2 {
    font-size: .24rem;
    color: #151618;
    line-height: .33rem;
  }

  .img3 {
    position: absolute;
    width: 3.08rem;
    height: 1.71rem;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}
</style>