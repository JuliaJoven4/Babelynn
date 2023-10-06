<template>
    <div class="sidebar border border-solid border-gray-200 h-screen">
        <div class="logo">
            <img src="@/assets/logo_Babelynn.png" alt="Logo Babelynn" class="w-20 mx-auto my-10">
        </div>
        <div class="pulseras_acordeon border-t border-solid border-gray-200">
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
                @click="toggleAccordion"
                >
                <span>Brazaletes y pulseras</span>
                <ArrowIcon :isOpen="isAccordionOpen" />
            </button>
            <div v-show="isAccordionOpen" class="accordion-content">
              <!-- Opciones desplegables -->
              <ul class="text-left justify-start text-base">
                  <li v-for="(option, index) in productosPulseras" :key="index" class="h-10 flex items-center hover:bg-gray-100">
                    <span class="pl-6">{{ option }}</span>
                  </li>

                  <!-- Cuando tenga rutas lo cambio por esto: -->
                  <!--
                    <router-link
                      v-for="(option, index) in accordionOptions"
                      :key="index"
                      :to="`/ruta/${index}`"
                      class="h-10 flex items-center"
                    >
                      {{ option }}
                    </router-link>
                  -->
                  
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
    const productosPulseras = ["Pulseras dobles", "Brazaletes anchos", "Pulseras unisex"]

    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
    };

    return {
      isAccordionOpen,
      toggleAccordion,
      productosPulseras
    };
  },
  components: {
    ArrowIcon,
  },
};

</script>