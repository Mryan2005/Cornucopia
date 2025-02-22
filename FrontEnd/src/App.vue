<template>
  <div id="app" class="full-screen" :style="appStyle">
    <Sidebar />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <input type="text" v-model="backgroundImageUrl" placeholder="Enter image URL" />
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';
import { defineComponent, ref, computed } from 'vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const backgroundImageUrl = ref('https://upload-bbs.miyoushe.com/upload/2021/07/02/160081595/9b8d4843d89bcd419e5e4bfc7d3799c4_5013697469147471566.png'); // 默认背景图片URL

    const appStyle = computed(() => ({
      backgroundImage: `url(${backgroundImageUrl.value})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
    }));

    return {
      backgroundImageUrl,
      appStyle,
    };
  },
};
</script>

<style scoped>
#app {
  display: flex;
}

.full-screen {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;

}

.main-content {
  margin-left: 90px; /* 与侧边栏宽度一致 */
  padding: 20px;
  width: calc(100% - 80px);
}

input[type="text"] {
  position: absolute;
  top: 20px;
  left: 220px; /* 确保输入框不被侧边栏遮挡 */
  padding: 5px;
  width: 300px;
  border: none;
  border-radius: 5px;
}
</style>