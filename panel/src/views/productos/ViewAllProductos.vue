<template>
    <div>
        <Sidebar/>
        <h1>Aquí van a ir todos los productos y va a ser la página inicial.</h1>
    </div>
</template>

<script>
    import Sidebar from "@/components/Sidebar.vue";
    // import TopNav from "@/components/TopNav.vue";
    import axios from "axios";

    export default {
        name: "ViewAllProductos",
        components: {
            Sidebar,
        }
    }

</script>