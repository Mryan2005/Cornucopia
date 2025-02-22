<template>
    <div class="dock-sidebar" id="dock-sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/blank">Blank Page</router-link></li>
        <li><router-link to="/empty">Empty Page</router-link></li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Sidebar',
    mounted() {
      console.log(window.innerHeight, document.documentElement.clientHeight);
      const dockSidebar = document.getElementById('dock-sidebar');
      if (dockSidebar) {
        dockSidebar.style.top = `${(window.innerHeight / 2) - (dockSidebar.offsetHeight / 2)}px`;
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .dock-sidebar {
    width: 80px;
    background-color: rgba(255, 255, 255, 0.8);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 垂直居中 */
    align-items: center;
    // padding-top: 20px;
    border-radius: 10px;
    margin-left: 10px;
  }
  
  .dock-sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .dock-sidebar li {
    // margin: 20px 0;
  }
  
  .dock-sidebar a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    transition: background-color 0.3s;
  }
  
  .dock-sidebar a:hover {
    background-color: #555;
  }
  </style>