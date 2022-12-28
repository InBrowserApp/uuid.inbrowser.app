import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UUIDV4View from "../views/UUIDV4View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/v4",
      name: "uuidv4",
      component: UUIDV4View,
    },
  ],
});

export default router;
