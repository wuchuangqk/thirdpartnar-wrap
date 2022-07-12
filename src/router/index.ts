import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 首页
  { path: '/', component: () => import('@/views/index.vue') },
  // 信息流广告
  { path: '/information', component: () => import('@/views/information.vue') },
  // 搜索广告
  { path: '/search', component: () => import('@/views/search.vue') },
  // 应用商店
  { path: '/shop', component: () => import('@/views/shop.vue') },
  // 关于我们
  { path: '/about', component: () => import('@/views/about.vue') },
  // 海外广告
  { path: '/overseas', component: () => import('@/views/overseas.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
})