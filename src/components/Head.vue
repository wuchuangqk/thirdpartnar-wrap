<template>
  <div class="p-20 flex items-center justify-between relative header-wrap">
    <img src="../assets/logo@2x.webp" alt="" class="img1">
    <img src="../assets/caidan@2x.webp" alt="" class="img2" @click="menuVisible = !menuVisible">
    <Collapse v-if="menuVisible" class="collapse">
      <CollapseItem name="1">
        <template #header>
          <p class="fs-30" @click="nav('/')">
            <span>网站首页</span>
          </p>
        </template>
      </CollapseItem>
      <CollapseItem name="2" title="信息流广告代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <span @click="nav('/information')">抖音广告代运营</span>
          </p>
          <p class="link">
            <a @click="nav('/information')">快手广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">小红书广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">Facebook广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">微博广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">知乎广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">百度广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/information')">广点通广告代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="3" title="搜索广告代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <a @click="nav('/search')">百度广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/search')">搜狗广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/search')">谷歌海外广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/search')">微软Bing广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/search')">Yandex广告代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/search')">Yahoo广告代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="4" title="应用商店代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <a @click="nav('/shop')">华为代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/shop')">VIVO代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/shop')">OPPO代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/shop')">IOS代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/shop')">小米代运营</a>
          </p>
          <p class="link">
            <a @click="nav('/shop')">360推广代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="5">
        <template #header>
          <p class="fs-30" @click="nav('/overseas')">
            <span>海外广告代运营</span>
          </p>
        </template>
      </CollapseItem>
      <CollapseItem name="6">
        <template #header>
          <p class="fs-30" @click="nav('/about')">
            <span>关于我们</span>
          </p>
        </template>
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Collapse from './Collapse/Collapse.vue';
import CollapseItem from './Collapse/CollapseItem.vue';
const router = useRouter()
const menuVisible = ref(false)
const nav = (path: string) => {
  menuVisible.value = false
  router.push(path)
}
</script>

<style scoped lang="scss">
.img1 {
  width: 1.98rem;
  height: 0.48rem;
}

.img2 {
  width: .66rem;
  height: .6rem;
}

.collapse {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 99;
  border-top: 1px solid #DEDEDE;
}

.link {
  font-size: .26rem;
  color: #595959;
}

.header {
  position: relative;
  z-index: 100;
}
.header-wrap {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  top: 0;
  background-color: white;
}
</style>
