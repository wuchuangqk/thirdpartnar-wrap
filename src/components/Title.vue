<template>
  <div class="title-wrap">
    <p class="title">{{ title }}</p>
    <p class="desc">{{ en }}</p>
    <div class="line"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  title: string, // 标题
  en: string, // 标题英文
}>()
</script>

<style lang="scss" scoped>
.title-wrap {
  text-align: center;
  margin: .5rem 0;

  .title {
    font-size: .3rem;
    font-weight: 800;
  }

  .desc {
    font-size: .2rem;
    color: #828282;
    margin: .18rem 0;
  }

  .line {
    width: 1.64rem;
    height: 1px;
    background: #4E6EF2;
    margin: 0 auto;
  }
}
</style>