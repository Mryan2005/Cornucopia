<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
}

.main-content {
  margin-left: 90px; /* 与侧边栏宽度一致 */
  padding: 20px;
  width: calc(100% - 80px);
}
</style>