<template>
    <!-- <h1 class="bg-blue">{{ msg }}</h1> -->
    <header class="flex items-center justify-between p-4 bg-white border-b border-solid border-gray-200">
        <div class="cursor-pointer" @click="openSidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>
        <div class="text-2xl cursor-pointer" @click="redirectToHome">
            <img src="../assets/logo_Babelynn.png" alt="Logo Babelynn" class="h-7"/>
        </div>
        <div class="cursor-pointer" @click="openProfile">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12s8-4 8-8H4c0 4 8 8 8 8z"></path>
            </svg>
        </div>
    </header>
</template>

<script>
    export default {
        setup () {
            const msg = "Hola"

            return {
                msg
            }
        }
    }
</script>