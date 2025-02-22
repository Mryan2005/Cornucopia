import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Empty from '../views/empty.vue'; // 导入新的组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/empty', // 新的路由路径
    name: 'Empty',
    component: Empty,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;