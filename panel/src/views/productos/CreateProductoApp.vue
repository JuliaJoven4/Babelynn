<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="header-pretitle">Productos</h6>
                    <h1 class="header-title">Nuevo producto</h1>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <!-- <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active"> Todos los productos </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/producto/create" class="nav-link"
                          >Nuevo producto</router-link
                        >
                      </li>
                    </ul> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="row justify-content-between align-items-center">
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Aquí se muestra en pequeño la imagen que se va a subir -->
                      <div class="avatar">
                        <img
                          class="avatar-img rounded-3"
                          :src="str_image"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div class="col ms-n2">
                      <h4 class="mb-1">
                        <b>Portada</b>
                      </h4>
                      <small class="text-muted">
                        PNG or JPG no bigger than 1000px wide and tall.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-auto">

                  <label for="file-upload" class="btn btn-sm btn-primary">
                    Upload
                  </label>
                  <input
                    style="display: none"
                    id="file-upload"
                    type="file"
                    v-on:change="uploadImage($event)"
                  />
                </div>
              </div>

              <hr class="my-5" />

              <div class="row">
                <div class="col-12">
                  <!-- Email address -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="mb-1"> Título del producto </label>

                    <small class="form-text text-muted">
                      This contact will be shown to others publicly, so choose
                      it carefully.
                    </small>

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Título del producto"
                      v-model="producto.titulo"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label class="form-label"> Categoria </label>

                    <select
                      name=""
                      class="form-select"
                      v-model="producto.categoria"
                    >
                      <option value="" disabled hidden selected>Selecciona una categoría</option>
                      <option value="Pulsera_sencilla">Pulsera sencilla</option>
                      <option value="Pulsera_doble">Pulsera doble</option>
                      <option value="Brazalete">Brazalete</option>
                      <option value="Collar_largo">Collar largo</option>
                      <option value="Collar_corto">Collar corto</option>
                      <option value="Gargantilla">Gargantilla</option>
                      <option value="Pendientes">Pendientes</option>
                      <option value="Anillo">Anillo</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label class="form-label"> Precio </label>

                    <input
                      type="number"
                      class="form-control"
                      placeholder="Precio"
                      v-model="producto.precio"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-12">
                  <div class="form-group">
                    <label class="form-label"> Extracto </label>

                    <textarea
                      class="form-control"
                      id=""
                      rows="3"
                      placeholder="Extracto"
                      v-model="producto.extracto"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Esto no sé si lo voy a usar, es el estado del producto -->

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label class="mb-1"> Producto publicado </label>

                    <small class="form-text text-muted">
                      Making your profile public means that anyone on the
                      Dashkit network will be able to find you.
                    </small>

                    <div class="row">
                      <div class="col-auto">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="switchOne"
                            v-model="producto.estado"
                          />
                          <label
                            class="form-check-label"
                            for="switchOne"
                          ></label>
                        </div>
                      </div>
                      <div class="col ms-n2">
                        <small class="text-muted"> Borrador activado </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="mt-4 mb-5" />

              <button class="btn btn-primary" v-on:click="validar()">
                Crear producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";

export default {
  name: "CreateProductoApp",
  components: {
    Sidebar,
  },
  data() {
    return {
      str_image: "http://localhost:8080/assets/img/logo.svg",
      producto: {
        categoria: "",
        estado: false,
        portada: undefined,
      },
      portada: undefined,
    };
  },
  methods: {
    uploadImage($event) {
      var imagen;

      //Comprobamos que la imagen se sube correctamente
      if ($event.target.files.length >= 1) {
        //Le damos a la variable 'imagen' el valor del archivo subido
        imagen = $event.target.files[0];
      }

      //Controlamos que la imagen no pese más de aproximadamente 1MB
      if (imagen.size <= 1000000) {
        //Una vez superado, se comprueba que el archivo subido sea una imagen
        if (
          imagen.type == "image/jpeg" ||
          imagen.type == "image/png" ||
          imagen.type == "image/webp" ||
          imagen.type == "image/jpg"
        ) {
          /**Se guarda la imagen en un formato codificado para que se pueda insertar directamente
           * en el HTML y se pueda visualizar en pequeño al subirla
           */
          this.str_image = URL.createObjectURL(imagen);
          this.portada = imagen;
          this.producto.portada = this.portada;
        } else {
          //Hago que aparezca una ventana emergente para avisar de que hay un error.
          window.alert('El recurso debe ser imagen.');
        }
      } else {
        window.alert('La imagen debe pesar menos de 1MB.');
      }
    },
    validar() {
      if (!this.producto.titulo) {
        window.alert('Introduzca el titulo del producto.');
      } else if (!this.producto.categoria) {
        window.alert('Seleccione la categoria del producto.');
      } else if (!this.producto.precio) {
        window.alert('Introduzca el precio del producto.');
      } else if (!this.producto.extracto) {
        window.alert('Introduzca el extracto del producto.');
      } else if (this.producto.portada == undefined) {
        window.alert('Seleccione una imagen de portada.');
      } else {
        //Si todo funciona bien, llamamos al método de registro.
        this.registro();
      }
    },

    /**Enviamos los datos desde el front-end con Vue a través de FormData. */
    registro() {
      var fm = new FormData();
      fm.append("titulo", this.producto.titulo);
      fm.append("categoria", this.producto.categoria);
      fm.append("precio", this.producto.precio);
      fm.append("extracto", this.producto.extracto);
      fm.append("estado", this.producto.estado);
      fm.append("descuento", this.producto.descuento);
      fm.append("portada", this.producto.portada); //Se envía la imagen

      //Utilizamos axios para hacer la consulta
      axios
        .post(this.$url + "/registro_producto_admin", fm, {
          headers: {
            "Content-Type": "multipart/form-data",
            //Obtenemos el token mediante el storage de Vue
            Authorization: localStorage.getItem('token')
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>
<style>
    @font-face {
        font-family: 'cerebrisans';
        src: url('@/../../panel/public/assets/fonts/cerebrisans/cerebrisans-regular.woff');
      }
      *{
        font-family: 'cerebrisans' !important;
      }
</style>