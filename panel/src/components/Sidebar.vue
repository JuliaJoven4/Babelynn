<template>
    <div class="sidebar border border-solid border-gray-200">
        <div class="logo">
            
        </div>
        <div class="pulseras_acordeon border-t border-solid border-gray-200">
            <button
                class="accordion-title flex justify-between items-center p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200"
                @click="toggleAccordion(1)"
                :class="{ 'active': activeAccordion === 1 }"
                >
                Brazaletes y pulseras
            </button>
            <div v-show="activeAccordion === 1" class="accordion-content p-4">
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

export default {
  setup() {
    // Utilizamos ref en lugar de data para definir variables reactivas
    const activeAccordion = ref(null);

    // Utilizamos el objeto setup para definir los métodos del componente
    const toggleAccordion = (index) => {
      // Accedemos a la variable reactive mediante su valor
      if (activeAccordion.value === index) {
        activeAccordion.value = null;
      } else {
        activeAccordion.value = index;
      }
    };

    // Retornamos las variables y métodos que queremos exponer
    return {
      activeAccordion,
      toggleAccordion,
    };
  },
};
</script>