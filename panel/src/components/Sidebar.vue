<template>
  <nav class="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
      <div class="container-fluid">
    
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <!-- Aquí va el logo de Babelynn -->
        <a class="navbar-brand" href="/productos">
          <img src="/assets/img/logo.svg" class="navbar-brand-img mx-auto" alt="...">
        </a>

        <h6 class="navbar-heading">
          Productos
        </h6>
    
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidebarCollapse">
    
          <!-- Form -->
          <form class="mt-4 mb-3 d-md-none">
            <div class="input-group input-group-rounded input-group-merge input-group-reverse">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-text">
                <span class="fe fe-search"></span>
              </div>
            </div>
          </form>
    
          <!-- Navigation -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#sidebarPulseras" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPulseras">
                Pulseras
              </a>
              <div class="collapse" id="sidebarPulseras">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="./index.html" class="nav-link">
                      Pulseras sencillas
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./dashboard-project-management.html" class="nav-link ">
                      Pulseras dobles
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./dashboard-ecommerce.html" class="nav-link ">
                      Brazaletes
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- POSIBLE ITEM A ELIMINAR -->
            <!-- paginas -->
            <li class="nav-item">
              <a class="nav-link" href="#sidebarCollares" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCollares">
                Collares
              </a>
              <div class="collapse" id="sidebarCollares">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="#sidebarCollarLargo" class="nav-link">
                      Collares largos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sidebarCollarCorto" class="nav-link">
                      Collares cortos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sidebarGargantilla" class="nav-link">
                      Gargantillas
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- pages -->

            <li class="nav-item">
              <a class="nav-link " href="./widgets.html">
                Pendientes
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="./widgets.html">
                Anillos
              </a>
            </li>
          </ul>
          
          <!-- Divider -->
          <hr v-if="isAuthenticated" class="navbar-divider my-3">

          <ul v-if="isAuthenticated" class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " href="/producto/create">
                Añadir productos
              </a>
            </li>
          </ul>

          <!-- Divider -->
          <hr class="navbar-divider my-3">
    
          <!-- Heading -->
          <h6 class="navbar-heading">
            Sobre mí
          </h6>

          <ul class="navbar-nav mb-md-4">
            <li class="nav-item">
              <a class="nav-link" href="#sidebarContacto" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarContacto">
                Contáctame
              </a>
              <div class="collapse " id="sidebarContacto">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="https://www.instagram.com/susybabelynn/" target="_blank" class="nav-link ">
                      Instagram
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://www.facebook.com/SusyBabelynn/shop_tab" target="_blank" class="nav-link ">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
    
          <!-- Push content down -->
          <div class="mt-auto"></div>
    
            <!-- User (md) -->
            <div v-if="isAuthenticated" class="navbar-user d-none d-md-flex" id="sidebarUser">
    
              <!-- Enlace que llama al método para cerrar sesión -->
              <button class="cerrar_sesion pe-3 ps-3" @click="logout">Cerrar sesión</button>
    
            </div>
            <div v-else class="navbar-user d-none d-md-flex" id="sidebarUser">
              <button class="iniciar_sesion pe-3 ps-3" @click="goToLogin">Iniciar sesión</button>
            </div>
    
        </div> <!-- / .navbar-collapse -->
    
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    /**Método para comprobar si hay un token guardado en localStorage, lo cual significaría que hay un administrador
     * con la sesión iniciada. */
    isAuthenticated() {
      /**Devolvemos, mediante '!!', el valor booleano de la expresión (true si existe el token, y false si no). */
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      if (confirm('Está a punto de cerrar sesión. ¿Está seguro?')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.$router.push('/login');
      }
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style>
  .cerrar_sesion, .iniciar_sesion {
    background-color: rgb(219, 219, 219);
    border: none;
    height: 35px;
    border-radius: 5px;
  }

  .cerrar_sesion:hover, .iniciar_sesion:hover {
    background-color: rgb(197, 197, 197);
  }

</style>