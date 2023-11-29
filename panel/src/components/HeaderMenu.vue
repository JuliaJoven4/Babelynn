<template>
    <!-- <h1 class="bg-blue">{{ msg }}</h1> -->
    <header class="flex items-center justify-between bg-white border-b border-solid border-gray-200 p-0">
        <div class="cursor-pointer p-4" @click="openSidebar">
            <svg class="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>
        <div class="text-2xl cursor-pointer" @click="redirectToHome">
            <img src="../assets/logoBabelynnLetras.png" alt="Logo Babelynn" class="h-11"/>
        </div>
        <div class="cursor-pointer p-4" @click="openProfile">
            <UserIcon/>
        </div>
    </header>
</template>

<script>
    import UserIcon from '@/assets/icons/UserIcon.vue';

    export default {
        setup (_, { emit }) {
            const openSidebar = () => {
                emit('toggle-sidebar');
            };

            return {
                openSidebar
            }
        },
        components: {
            UserIcon,
        }
    }
</script>