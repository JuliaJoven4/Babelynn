import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateProductoApp from '../views/productos/CreateProductoApp'
import ViewAllProductos from '../views/productos/ViewAllProductos'
//prueba
// import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  //Login va a ser la ruta base, por lo que no le asignamos ningún nombre, solo la barra.
  { path: '/login', name: 'login', component: LoginApp },
  // { path: '/', name: 'about', component: AboutView },
  { path: '/', name: 'productos', component: ViewAllProductos },
  { path: '/productos', name: 'productos', component: ViewAllProductos },
  // { path: '/about', name: 'about', component: AboutView },
  { path: '/producto/create', 
    name: 'CreateProducto', 
    component: CreateProductoApp,
    //Se permite el acceso a la ruta siempre que exista un token, es decir, que el usuario esté registrado como administrador.
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
