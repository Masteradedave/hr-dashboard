import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import ForgetPassword from "@/Pages/ForgetPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      component: ForgetPassword,
    },
  ],
});

export default router;
