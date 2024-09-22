import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DjangoPathMaker from "../pages/DjangoPathMaker.vue";
import Product from "../pages/Product.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/DjangoPathMaker",
    name: "DjangoPathMaker",
    component: DjangoPathMaker,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
