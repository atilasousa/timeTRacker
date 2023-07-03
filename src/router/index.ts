import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

export const Router = createRouter({
  history: createWebHistory(),
  routes,
});
