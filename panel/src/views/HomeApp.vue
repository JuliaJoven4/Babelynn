<template>
    <div id="homeApp">
        <!-- Si isSidebarOpen es true, se convertirá en false, y si es false, se convertirá en true -->
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
import HelloWorld from '@/components/HelloWorld.vue';
import SidebarOptions from '@/components/SidebarOptions.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
    name: 'HomeApp',
    components: {
        HelloWorld,
        SidebarOptions,
        HeaderMenu,
    },
    setup() {
        //El sidebar empieza siendo invisible.
        console.log("HomeApp setup");
        const isSidebarOpen = ref(false);

        return {
        isSidebarOpen,
        };
    }
}
</script>

<style>
@import '../../../backend/output.css';

.main-content {
  flex-grow: 1;
  transition: padding-left 500ms ease-in-out;
}

.with-sidebar {
  padding-left: 240px;
}
</style>