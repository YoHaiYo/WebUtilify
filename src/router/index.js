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
    meta: {
      title:
        "WebUtilify - Web Development Tools, HTML Path Converter, Django Path Maker",
      metaTags: [
        {
          name: "description",
          content:
            "WebUtilify provides various web development tools. Enhance your efficiency with our HTML path converter and Django path maker.",
        },
        {
          property: "og:title",
          content: "WebUtilify - Web Development Tools",
        },
      ],
    },
  },
  {
    path: "/DjangoPathMaker",
    name: "DjangoPathMaker",
    component: DjangoPathMaker,
    meta: {
      title: "WebUtilify | DjangoPathMaker",
      metaTags: [
        {
          name: "description",
          content:
            "WebUtilify provides various web development tools. Enhance your efficiency with our HTML path converter and Django path maker.",
        },
        {
          property: "og:title",
          content: "WebUtilify - Web Development Tools",
        },
      ],
    },
  },
  {
    path: "/AdsenceCalculator",
    name: "AdsenceCalculator",
    component: AdsenceCalculator,
    meta: {
      title: "WebUtilify | AdsenceCalculator",
      metaTags: [
        {
          name: "description",
          content:
            "Calculate your Google Adsense earnings easily with WebUtilify's Adsense Revenue Calculator. Get accurate estimates for your website income.",
        },
        {
          property: "og:title",
          content: "WebUtilify - Adsense Revenue Calculator",
        },
      ],
    },
  },
  {
    path: "/ExchangeRateCalculator",
    name: "ExchangeRateCalculator",
    component: ExchangeRateCalculator,
    meta: {
      title: "WebUtilify | ExchangeRateCalculator",
      metaTags: [
        {
          name: "description",
          content:
            "Get real-time exchange rates with WebUtilify's Exchange Rate Calculator. Convert currencies instantly with accurate and up-to-date information.",
        },
        {
          property: "og:title",
          content: "WebUtilify - Exchange Rate Calculator",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 전역 가드 추가
router.beforeEach((to, from, next) => {
  // 기존 메타 태그 제거
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).forEach(
    (el) => el.parentNode.removeChild(el)
  );

  // 페이지 제목 설정
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 새로운 메타 태그 추가
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach((tag) => {
      const tagElement = document.createElement("meta");
      Object.keys(tag).forEach((key) => {
        tagElement.setAttribute(key, tag[key]);
      });
      tagElement.setAttribute("data-vue-router-controlled", "");
      document.head.appendChild(tagElement);
    });
  }

  next();
});

export default router;
