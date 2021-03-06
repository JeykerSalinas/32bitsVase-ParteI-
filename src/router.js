import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio"
const Busqueda = () => import("./views/Busqueda");
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: Busqueda,
    },
  ],
});
