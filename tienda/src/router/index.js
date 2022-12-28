import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewAllProductos from '../views/productos/ViewAllProductos'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'productos', component: ViewAllProductos },
  {
    path: '/productos',
    name: 'productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/productos/ViewAllProductos.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
