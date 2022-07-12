<template>
  <div class="p-20 flex items-center justify-between relative">
    <img src="../assets/logo@2x.png" alt="" class="img1">
    <img src="../assets/caidan@2x.png" alt="" class="img2" @click="menuVisible = !menuVisible">
    <Collapse v-if="menuVisible" class="collapse">
      <CollapseItem name="1">
        <template #header>
          <p class="fs-30" @click="router.push('/')">
            <span>网站首页</span>
          </p>
        </template>
      </CollapseItem>
      <CollapseItem name="2" title="信息流广告代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <a href="#">抖音广告代运营</a>
          </p>
          <p class="link">
            <a href="#">快手广告代运营</a>
          </p>
          <p class="link">
            <a href="#">小红书广告代运营</a>
          </p>
          <p class="link">
            <a href="#">Facebook广告代运营</a>
          </p>
          <p class="link">
            <a href="#">微博广告代运营</a>
          </p>
          <p class="link">
            <a href="#">知乎广告代运营</a>
          </p>
          <p class="link">
            <a href="#">百度广告代运营</a>
          </p>
          <p class="link">
            <a href="#">广点通广告代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="3" title="搜索广告代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <a href="#">百度广告代运营</a>
          </p>
          <p class="link">
            <a href="#">搜狗广告代运营</a>
          </p>
          <p class="link">
            <a href="#">谷歌海外广告代运营</a>
          </p>
          <p class="link">
            <a href="#">微软Bing广告代运营</a>
          </p>
          <p class="link">
            <a href="#">Yandex广告代运营</a>
          </p>
          <p class="link">
            <a href="#">Yahoo广告代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="4" title="应用商店代运营">
        <div class="grid grid-cols-1 gap-46 px-30 pt-50 pb-10">
          <p class="link">
            <a href="#">华为代运营</a>
          </p>
          <p class="link">
            <a href="#">VIVO代运营</a>
          </p>
          <p class="link">
            <a href="#">OPPO代运营</a>
          </p>
          <p class="link">
            <a href="#">IOS代运营</a>
          </p>
          <p class="link">
            <a href="#">小米代运营</a>
          </p>
          <p class="link">
            <a href="#">360推广代运营</a>
          </p>
        </div>
      </CollapseItem>
      <CollapseItem name="5">
        <template #header>
          <p class="fs-30" @click="router.push('/')">
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
</style>
