<template>
  <div class="collapse-item">
    <slot name="header">
      <p class="flex fs-30 items-center" @click="handleClick">
        <span>{{ title }}</span>
        <img src="../../assets/xiala@2x.png" alt="" class="arrow">
      </p>
    </slot>
    <transition name="collapse-transition" @before-enter="beforeEnter" @enter="enter" @after-enter="collapseAfterEnter"
      @before-leave="collapseBeforeLeave" @leave="collapseLeave" @after-leave="collapseAfterLeave">
      <div v-show="expend">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { emitter } from '@/utils/emitter';
import { ref } from 'vue';

const props = defineProps<{
  title?: string, // 标题
  name: string;
}>()

const expend = ref(false)

let oldOverflow = ''
const beforeEnter = (el: HTMLElement) => {
  // 过渡效果开始前设置元素的maxHeight为0，让元素maxHeight有一个初始值
  el.style.maxHeight = '0';
}
const enter = (el: HTMLElement, done: Function) => {
  // el.style.overflow 此时获取到的是 ''
  oldOverflow = el.style.overflow;
  // 获取元素自身的高度
  let elHeight = el.scrollHeight;
  // 过渡效果进入后将元素的maxHeight设置为元素本身的高度，将元素maxHeight设置为auto不会有过渡效果
  if (elHeight > 0) {
    el.style.maxHeight = elHeight + 'px';
  } else {
    el.style.maxHeight = '0';
  }
  el.style.overflow = 'hidden';
  let onTransitionDone = function () {
    done();
    el.removeEventListener('transitionend', onTransitionDone, false);
    el.removeEventListener('transitioncancel', onTransitionDone, false);
  };
  // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
  el.addEventListener('transitionend', onTransitionDone, false);
  el.addEventListener('transitioncancel', onTransitionDone, false);
}
const collapseAfterEnter = (el: HTMLElement) => {
  // 过渡效果完成后恢复元素的maxHeight
  el.style.maxHeight = '';
  el.style.overflow = oldOverflow;
}
const collapseBeforeLeave = (el: HTMLElement) => {
  oldOverflow = el.style.overflow;
  el.style.maxHeight = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
}
const collapseLeave = (el: HTMLElement, done: Function) => {
  if (el.scrollHeight !== 0) {
    el.style.maxHeight = '0';
  }
  let onTransitionDone = function () {
    done();
    el.removeEventListener('transitionend', onTransitionDone, false);
    el.removeEventListener('transitioncancel', onTransitionDone, false);
  };
  // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
  el.addEventListener('transitionend', onTransitionDone, false);
  el.addEventListener('transitioncancel', onTransitionDone, false);
}
const collapseAfterLeave = (el: HTMLElement) => {
  el.style.maxHeight = '';
  el.style.overflow = oldOverflow;
  oldOverflow = '';
}

const handleClick = () => {
  // 通知父组件关闭子组件
  expend.value = !expend.value
  if (expend.value) {
    emitter.emit('expend', props.name)
  }
}
emitter.on('close', (name: any) => {
  if (name !== props.name) {
    expend.value = false
  }
})
</script>

<style lang="scss" scoped>
.collapse-transition-enter-active,
.collapse-transition-leave-active {
  // transition: height .3s ease-in-out, padding .3s ease-in-out, max-height .3s ease-in-out;
  transition: max-height .3s ease-in-out;
}

.collapse-item {
  border-bottom: 1px solid #F4F4F4;
  padding: .4rem 0 .4rem .5rem;
}

.arrow {
  width: .21rem;
  height: .11rem;
  margin-left: .11rem;
}
</style>