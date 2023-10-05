<template>
  <div id="app" class="flex">
    <SidebarOptions/>
    <div class="main-content mt-10">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SidebarOptions from '@/components/SidebarOptions.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SidebarOptions
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
</style>
