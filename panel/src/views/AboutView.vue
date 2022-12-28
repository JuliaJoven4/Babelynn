<template>
  <div class="about">
    <Sidebar/>
    <h1>Prueba componente</h1>
  </div>
</template>

<script>
  import Sidebar from "@/components/Sidebar.vue";

  export default {
    name: "CreateProductoApp",
    components: {
      Sidebar,
    }
  }
</script>