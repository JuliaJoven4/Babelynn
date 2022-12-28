<template>
  <div
    class="d-flex align-items-center bg-auth border-top border-top-2 border-primary"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <h1 class="display-4 text-center mb-3">Iniciar sesión</h1>
          <p class="text-muted text-center mb-5">Panel administrador</p>
          <form>
            <!-- Alerta de error de autenticación utilizando bootstrap. -->
            <div v-if="msn_error" class="alert alert-danger" role="alert">
              {{ msn_error }}
            </div>
            <!-- Correo electrónico -->
            <div class="form-group">
              <label class="form-label">Correo eletrónico</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Introduzca su correo electrónico"
              />
            </div>
            <!-- Contraseña -->
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label class="form-label">Contraseña</label>
                </div>
              </div>
              <div class="input-group input-group-merge">
                <input
                  class="form-control"
                  v-model="password"
                  type="password"
                  placeholder="Introduzca su contraseña"
                />
                <!-- Icono para ver la contraseña -->
                <span class="input-group-text">
                  <i class="fe fe-eye"></i>
                </span>
              </div>
            </div>
            <button
              class="btn btn-lg w-100 btn-primary mb-3"
              type="button"
              v-on:click="validar()"
            >
              Iniciar sesión
            </button>
            <button
              class="btn btn-lg w-100 btn-secondary mb-3"
              type="button"
              v-on:click="volver_inicio()"
            >
              Volver a la página de inicio
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginApp",
  data() {
    return {
      email: "",
      password: "",
      msn_error: "",
    };
  },
  created() {
    console.log(this.$url);
  },
  methods: {
    volver_inicio() {
        this.$router.push('/');
    },
    validar() {
      //Si no mandamos un correo electrónico:
      if (!this.email) {
        this.msn_error = "Introduzca un correo electrónico.";
        //Si no mandamos una contraseña:
      } else if (!this.password) {
        this.msn_error = "Introduzca una contraseña.";
      } else {
        this.msn_error = "";
        //Si todo es correcto, llamamos al método 'login'.
        this.login();
      }
      console.log(this.msn_error);
    },
    login() {
      //Objeto en el que colocar los campos.
      let data = {
        email: this.email,
        password: this.password,
      };
      //Enviamos los datos del formulario.
      /**El primer parámetro es la ruta, el segundo los datos (que hemos almacenado en el objeto data) */
      axios.post(this.$url + "/login_usuario", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
            /* Validamos el objeto data antes de nada: */
            if (result.data.data == undefined) {
                /**Si data es undefined, imprimimos el mensaje de error correspondiente utilizando la variable
                para ello. */
                this.msn_error = result.data.message;
            }

            /*Si funciona se almacena el token y el objeto usuario mediante localStorage. El objeto lo vamos a convertir
            a formato JSON. Comprobamos antes que result.data devuelva algún token. */ 
            if (result.data.token) {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('user', JSON.stringify(result.data.usuario));

                /**Controlo que la sesión del usuario administrdor dure por defecto una hora iniciada, si este no la
                 * cierra manualmente.
                 */

                setTimeout(() => {
                    /**Al cabo de una hora desde el inicio de sesión, se eliminan el token y el objeto 'usuario'
                     * del localStorage y se envía al usuario a la página inicial.
                     */
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    this.$router.push('/');
                }, 3600 * 1000);

                /**Redirección a la ruta que escojamos cuando la autenticación es correcta. */
                this.$router.push({name: 'productos'});
            }
        })
        .catch((error) => {
            //Si falla se imprime por consola el error.
            console.log(error);
        });
    },
  },
  components: {},
};
</script>
