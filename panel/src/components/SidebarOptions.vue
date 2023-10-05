<template>
    <div class="sidebar border border-solid border-gray-200">
        <div class="logo">
            <img src="@/assets/logo_Babelynn.png" alt="Logo Babelynn" class="w-20 mx-auto my-5">
        </div>
        <div class="pulseras_acordeon border-t border-solid border-gray-200">
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center"
                @click="toggleAccordion"
                >
                <span>Brazaletes y pulseras</span>
                <ArrowIcon :isOpen="isAccordionOpen" />
            </button>
            <div v-show="isAccordionOpen" class="accordion-content p-4">
            <!-- Opciones desplegables -->
            <ul>
                <li>Pulseras dobles</li>
                <li>Brazaletes anchos</li>
                <li>Pulseras unisex</li>
                <!-- Agrega más opciones aquí -->
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'

export default {
  setup() {
    const isAccordionOpen = ref(false);

    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
    };

    return {
      isAccordionOpen,
      toggleAccordion,
    };
  },
  components: {
    ArrowIcon,
  },
};

</script>