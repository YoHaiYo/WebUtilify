<template>
  <!--- PC뷰 -->
  <nav
    class="hidden md:flex justify-between items-center p-6 px-4 bg-gray-900 shadow-lg"
  >
    <div class="flex justify-between items-center w-full">
      <!-- 로고 -->
      <div class="md:w-1/3">
        <router-link class="flex items-center max-w-max" to="/">
          <img class="h-8" :src="logoPath" alt="Logo" />
          <h1 class="logo-text">WebUtilify</h1>
        </router-link>
      </div>
      <!-- 네비메뉴 -->
      <div class="md:w-2/3">
        <ul class="flex justify-center space-x-8">
          <li v-for="menuItem in menuItems" :key="menuItem.name">
            <a
              class="text-gray-300 text-lg hover:text-white transition-colors duration-200 font-medium"
              :href="menuItem.path"
            >
              {{ menuItem.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- 모바일 뷰 햄버거 버튼 -->
  <button
    @click="isMenuOpen = !isMenuOpen"
    class="md:hidden p-4 text-gray-300 focus:outline-none"
  >
    <font-awesome-icon
      icon="fa-bars"
      class="text-gray-300"
      style="font-size: 28px; font-weight: bold"
    />
  </button>

  <!-- 모바일 네비바 -->
  <div
    class="navbar-menu fixed inset-0 z-50 w-full h-full bg-gray-900 bg-opacity-80 transform transition-transform duration-300 ease-in-out"
    :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
  >
    <div
      class="fixed top-0 left-0 bottom-0 w-4/6 max-w-xs bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out"
    >
      <nav class="relative p-6 h-full overflow-y-auto">
        <div class="flex flex-col h-full">
          <!-- 로고 -->
          <a class="inline-flex items-center mb-6" href="/">
            <img class="h-8" :src="logoPath" alt="Logo" />
            <h1 class="logo-text">WebUtilify</h1>
          </a>
          <!-- 모바일 네비 메뉴 -->
          <ul class="space-y-4">
            <li v-for="menuItem in menuItems" :key="menuItem.name">
              <a
                class="block text-lg py-3 px-4 text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:bg-gray-700 rounded-md"
                :href="menuItem.path"
              >
                {{ menuItem.name }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- 닫기 버튼 -->
      <button
        @click="isMenuOpen = false"
        class="absolute top-5 right-3 p-4 text-gray-300"
      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 4.293a1 1 0 011.414 1.414L9.414 9l3.293 3.293a1 1 0 01-1.414 1.414L8 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L6.586 9 3.293 5.707a1 1 0 011.414-1.414L8 7.586l3.293-3.293z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 메뉴 상태
const isMenuOpen = ref(false);

// 로고 이미지 경로
const logoPath =
  "https://raw.githubusercontent.com/YoHaiYo/WebUtilify/refs/heads/main/src/assets/webutilify-logo.png";

// 메뉴 아이템들 (이름, 경로 관리)
const menuItems = [
  { name: "DjangoPathMaker", path: "/DjangoPathMaker" },
  { name: "AdsenceCalculator", path: "/AdsenceCalculator" },
];
</script>

<style scoped>
.logo-text {
  color: rgb(230, 230, 230);
  font-weight: bold;
  font-size: 1.8rem;
  margin-left: 10px;
}
/* 모바일 네비게이션의 부드러운 전환을 위해 transform과 translate 사용 */
.navbar-menu {
  transform: translateX(-100%);
}

/* 햄버거 버튼의 색상 */
button {
  transition: transform 0.3s ease;
}

/* PC 네비게이션 */
nav {
  background-color: #1f2937;
  border-bottom: 1px solid #374151;
}

/* 모바일 메뉴 슬라이드 애니메이션 */
.navbar-menu.translate-x-0 {
  transform: translateX(0);
}

.navbar-menu.-translate-x-full {
  transform: translateX(-100%);
}
</style>
