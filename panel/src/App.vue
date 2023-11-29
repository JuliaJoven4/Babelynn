<template>
  <div id="app">
    <HeaderMenu @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
    <div class="main-content flex">
      <SidebarOptions :isVisible="isSidebarOpen" />
      <div :class="['main-content', { 'with-sidebar': isSidebarOpen }]" class="main-content mt-10">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import SidebarOptions from '@/components/SidebarOptions.vue'
import HeaderMenu from './components/HeaderMenu.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SidebarOptions,
    HeaderMenu
  },
  setup() {
    const isSidebarOpen = ref(false);

    return {
      isSidebarOpen,
    };
  }
}
</script>

<style>
@import '../../backend/output.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.main-content {
  flex-grow: 1; /* Ocupa todo el espacio restante en el contenedor principal */
}

.with-sidebar {
  padding-left: 250px; /* Adjust based on sidebar width */
}
</style>
