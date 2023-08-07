import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/dashboard",
    name: "tutorials",
    component: () => import("./components/Dashboard.vue"),
  },
  {
    path: "/esp-idf",
    name: "ESP-IDF",
    component: () => import("./components/EspIdf.vue"),
  },
  {
    path: "/monitor/:portName",
    name: "ESP Monitor",
    component: () => import("./components/Monitor.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;