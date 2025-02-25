<template>
    <div class="dock-sidebar" :style="sidebarStyle" id="dock-sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/blank">Blank Page</router-link></li>
        <li><router-link to="/empty">Empty Page</router-link></li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import { Vibrant } from "node-vibrant/browser";
  export default {
    name: 'Sidebar',
    mounted() {
      console.log(window.innerHeight, document.documentElement.clientHeight);
      const dockSidebar = document.getElementById('dock-sidebar');
      if (dockSidebar) {
        dockSidebar.style.top = `${(window.innerHeight / 2) - (dockSidebar.offsetHeight / 2)}px`;
      }
    },
    setup() {
      const sidebarStyle = ref({});

      const updateSidebarStyle = async () => {
        const img = new Image();
        img.src = document.body.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          Vibrant.from(img).getPalette((err, palette) => {
            if (palette) {
              const dominantColor = palette.Vibrant.getRgb();
              sidebarStyle.value = {
                backgroundColor: `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.1)`,
                backdropFilter: 'blur(10px)',
              };
            }
          });
        };
      };

      onMounted(() => {
        updateSidebarStyle();
        window.addEventListener('resize', updateSidebarStyle);
      });

      return {
        sidebarStyle,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .dock-sidebar {
    width: 80px;
    backdrop-filter: blur(10px);
    color: white;
    background-color: rgb(255, 255, 255, 0.35);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
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