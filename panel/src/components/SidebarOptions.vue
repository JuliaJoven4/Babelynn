<template>
    <div :class="['sidebar', { 'sidebar-visible': isVisible }]" class="border border-solid border-gray-200">
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
          <transition name="accordion">
            <div v-if="acordeon.isOpen" class="accordion-content bg-gray-50">
              <!-- Opciones desplegables -->
              <ul class="text-left justify-start text-base">
                <li v-for="(option, optionIndex) in acordeon.opciones" :key="optionIndex" class="h-10 flex items-center hover:bg-gray-100">
                  <span class="pl-6">{{ option }}</span>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
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

              <!-- </ul> -->
</template>

<script>
  import { ref } from 'vue';
  import ArrowIcon from '@/assets/icons/ArrowIcon.vue';

  export default {
    props: {
      isVisible: Boolean,
    },
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

<style>
  .sidebar {
    position: absolute;
    top: 67px; /* Adjust to match the height of your header */
    left: 0;
    height: calc(100% - 67px); /* Subtract the header height*/
    transition: transform 500ms ease-in-out;
    transform: translateX(-100%);
  }

  .sidebar-visible {
    transform: translateX(0);
  }

  /* Initial state */
  .accordion-enter-from, .accordion-leave-to {
    max-height: 0;
    overflow: hidden;
  }

  /* End state */
  .accordion-enter-to, .accordion-leave-from {
    max-height: 120px; /* Adjust this value based on the maximum height your content might have */
    overflow: hidden;
  }

  /* Transition */
  .accordion-enter-active, .accordion-leave-active {
    transition: max-height 300ms ease-in-out;
  }
</style>