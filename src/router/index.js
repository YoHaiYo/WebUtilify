import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DjangoPathMaker from "../pages/DjangoPathMaker.vue";
import AdsenceCalculator from "../pages/AdsenceCalculator.vue";
import ExchangeRateCalculator from "../pages/ExchangeRateCalculator.vue";

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
    path: "/AdsenceCalculator",
    name: "AdsenceCalculator",
    component: AdsenceCalculator,
  },
  {
    path: "/ExchangeRateCalculator",
    name: "ExchangeRateCalculator",
    component: ExchangeRateCalculator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
