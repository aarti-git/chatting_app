import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  {
    path: "/login",
    name: "Login",
    component:() => import("../views/Login.vue") ,
  },
  {
    path: "/register",
    name: "Register",
    component:() => import("../views/Register.vue") ,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component:() => import("../views/ResetPassword.vue") ,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
