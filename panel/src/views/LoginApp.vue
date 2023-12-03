<template>
  <div id="loginApp" class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h1 class="text-2xl font-semibold text-babelynnBrown mb-8 text-center">Iniciar sesión</h1>
      <div class="flex flex-col mb-6">
        <label for="username" class="mb-2 text-left">Nombre de Usuario</label>
        <input type="text" id="username" class="border border-gray-500 rounded py-2 px-4">
      </div>

      <div class="flex flex-col mb-8">
        <label for="password" class="mb-2 text-left">Contraseña</label>
        <input type="password" id="password" class="border border-gray-500 rounded py-2 px-4">
      </div>

      <button class="w-full bg-babelynnBrown hover:bg-babelynnBrownHover text-white font-bold py-2 rounded">
        Iniciar sesión
      </button>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'LoginApp',
  components: {
  },
}
</script>
  