import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由
import './assets/styles.scss'; // 引入全局SCSS文件

createApp(App).use(router).mount('#app'); // 使用路由