<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { emitter } from '@/utils/emitter';
// 监听子组件的展开事件
emitter.on('expend', (name: any) => {
  emitter.emit('close', name)
})
</script>

<style lang="scss" scoped>
</style>