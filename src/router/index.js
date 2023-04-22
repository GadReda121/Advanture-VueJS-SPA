import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogInView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/forgetPassword",
      name: "forgetPassword",
      component: () => import("../views/ForgetPassword.vue"),
    },
    {
      path: "/resetPassword",
      name: "resetPassword",
      component: () => import("../views/RestPassword.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Error",
      component: () => import("../components/Error404.vue"),
    },
  ],
});

export default router;
