<template>
  <div class="sidebar border border-solid border-gray-200 h-screen">
    <div class="logo">
        <img src="@/assets/logo_Babelynn.png" alt="Logo Babelynn" class="w-20 mx-auto my-10">
    </div>
    <div v-for="(acordeon, index) in acordeones" :key="index">
      <div :class="`${acordeon.clase} border-b border-solid border-gray-200`">
        <button
          class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
          @click="toggleAccordion(index)"
        >
          <span>{{ acordeon.titulo }}</span>
          <ArrowIcon :isClosed="!acordeon.isOpen" />
        </button>
        <div v-if="acordeon.isOpen" class="accordion-content hover:bg-black transition duration-300">
          <!-- Opciones desplegables -->
          <ul class="text-left justify-start text-base">
            <li v-for="(option, optionIndex) in acordeon.opciones" :key="optionIndex" class="h-10 flex items-center hover:bg-gray-100">
              <span class="pl-6">{{ option }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <!-- <div class="sidebar border border-solid border-gray-200 h-screen">
        <div class="logo">
            <img src="@/assets/logo_Babelynn.png" alt="Logo Babelynn" class="w-20 mx-auto my-10">
        </div> -->

        <!-- Acordeón de pulseras y brazaletes -->
        <!-- <div class="pulseras_acordeon border-t border-solid border-gray-200"> -->
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <!-- <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
                @click="toggleAccordion"
                >
                <span>Brazaletes y pulseras</span>
                <ArrowIcon :isClosed="!isAccordionOpen" />
            </button> -->
            <!-- <div v-show="isAccordionOpen" class="accordion-content transition-transform transform origin-top duration-300"> -->
            <!-- <div v-if="isAccordionOpen" class="accordion-content hover:bg-black transition duration-300"> -->
              <!-- Opciones desplegables -->
              <!-- <ul class="text-left justify-start text-base">
                  <li v-for="(option, index) in productosPulseras" :key="index" class="h-10 flex items-center hover:bg-gray-100">
                    <span class="pl-6">{{ option }}</span>
                  </li> -->

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

              <!-- </ul>
            </div>
        </div> -->

        <!--Acordeón de collares y gargantillas -->
        <!-- <div class="collares_acordeon border-t border-solid border-gray-200"> -->
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <!-- <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
                @click="toggleAccordion"
                >
                <span>Gargantillas y collares</span>
                <ArrowIcon :isClosed="!isAccordionOpen" />
            </button> -->
            <!-- <div v-show="isAccordionOpen" class="accordion-content transition-transform transform origin-top duration-300"> -->
            <!-- <div v-if="isAccordionOpen" class="accordion-content hover:bg-black transition duration-300"> -->
              <!-- Opciones desplegables -->
              <!-- <ul class="text-left justify-start text-base">
                  <li v-for="(option, index) in productosCollares" :key="index" class="h-10 flex items-center hover:bg-gray-100">
                    <span class="pl-6">{{ option }}</span>
                  </li> -->

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

              <!-- </ul>
            </div>
        </div> -->

        <!--Acordeón de pendientes -->
        <!-- <div class="collares_acordeon border-t border-solid border-gray-200"> -->
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <!-- <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
                @click="toggleAccordion"
                >
                <span>Pendientes</span>
                <ArrowIcon :isClosed="!isAccordionOpen" />
            </button> -->
            <!-- <div v-show="isAccordionOpen" class="accordion-content transition-transform transform origin-top duration-300"> -->
            <!-- <div v-if="isAccordionOpen" class="accordion-content hover:bg-black transition duration-300"> -->
              <!-- Opciones desplegables -->
              <!-- <ul class="text-left justify-start text-base">
                  <li v-for="(option, index) in productosPendientes" :key="index" class="h-10 flex items-center hover:bg-gray-100">
                    <span class="pl-6">{{ option }}</span>
                  </li> -->

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

              <!-- </ul>
            </div>
        </div> -->

        <!--Acordeón de anillos -->
        <!-- <div class="collares_acordeon border-t border-solid border-gray-200"> -->
          <!-- Clase del botón: class="accordion-title p-4 bg-gray-100 cursor-pointer border-b border-solid border-gray-200 w-60 flex justify-between items-center" -->
            <!-- <button
                class="accordion-title p-4 cursor-pointer w-60 flex justify-between items-center text-lg"
                @click="toggleAccordion"
                >
                <span>Anillos</span>
                <ArrowIcon :isClosed="!isAccordionOpen" />
            </button>
            <div v-show="isAccordionOpen" class="accordion-content transition-transform transform origin-top duration-300"> -->
            <!-- <div v-if="isAccordionOpen" class="accordion-content hover:bg-black transition duration-300"> -->
              <!-- Opciones desplegables -->
              <!-- <ul class="text-left justify-start text-base">
                  <li v-for="(option, index) in productosAnillos" :key="index" class="h-10 flex items-center hover:bg-gray-100">
                    <span class="pl-6">{{ option }}</span>
                  </li> -->

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

              <!-- </ul>
            </div>
        </div>
    </div> -->
</template>

<script>
  import { ref } from 'vue';
  import ArrowIcon from '@/assets/icons/ArrowIcon.vue';

  export default {
    setup() {
      const acordeones = ref([
        {
          titulo: 'Brazaletes y pulseras',
          isOpen: false,
          opciones: ["Pulseras dobles", "Brazaletes anchos", "Pulseras unisex"],
          clase: 'pulseras_acordeon',
        },
        {
          titulo: 'Gargantillas y collares',
          isOpen: false,
          opciones: ["Gargantillas finas y chokers", "Collares largos", "Gargantillas africanas"],
          clase: 'collares_acordeon',
        },
        {
          titulo: 'Pendientes',
          isOpen: false,
          opciones: ["Pendientes de acero", "Pendientes de zamak"],
          clase: 'pendientes_acordeon',
        },
        {
          titulo: 'Anillos',
          isOpen: false,
          opciones: ["Baño de plata", "Baño de oro"],
          clase: 'anillos_acordeon',
        },
      ]);

      const toggleAccordion = (index) => {
        acordeones.value[index].isOpen = !acordeones.value[index].isOpen;
      };

      return {
        acordeones,
        toggleAccordion,
      };
    },
    components: {
      ArrowIcon,
    },
  };
// import { ref } from 'vue';
// import ArrowIcon from '@/assets/icons/ArrowIcon.vue'

// export default {
//   setup() {
//     const isAccordionOpen = ref(false);
//     const productosPulseras = ["Pulseras dobles", "Brazaletes anchos", "Pulseras unisex"]
//     const productosCollares = ["Gargantillas finas y chokers", "Collares largos", "Gargantillas africanas"]
//     const productosPendientes = ["Pendientes de acero", "Pendientes de zamak"]
//     const productosAnillos = ["Baño de plata", "Baño de oro"]

//     const toggleAccordion = () => {
//       isAccordionOpen.value = !isAccordionOpen.value;
//     };

//     return {
//       isAccordionOpen,
//       toggleAccordion,
//       productosPulseras,
//       productosCollares,
//       productosPendientes,
//       productosAnillos
//     };
//   },
//   components: {
//     ArrowIcon,
//   },
// };

</script>