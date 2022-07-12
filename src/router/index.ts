import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 首页
  { path: '/', component: () => import('@/views/index.vue') },
  // 信息流广告
  { path: '/information', component: () => import('@/views/information.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
})