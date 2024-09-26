<template>
  <section class="relative bg-gray-900 text-gray-300 overflow-hidden">
    <div class="py-20 md:py-28">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center text-center">
          <!-- 제목 -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to WebUtilify
          </h1>
          <!-- 설명 -->
          <p class="text-lg md:text-xl text-gray-400 mb-8">
            Transform the way you work with our suite of powerful tools designed
            to streamline your web development process.
            <br />
            From HTML path conversion to seamless integrations, WebUtilify
            empowers you to focus on what matters most—building exceptional web
            experiences.
          </p>
          <!-- 버튼 -->
          <a
            class="copy-button flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/DjangoPathMaker"
          >
            Get Started
          </a>
        </div>

        <div class="mt-16">
          <!-- Features 섹션 제목 -->
          <h2 class="text-3xl font-bold text-center text-white mb-8">
            Select WebUtilify List !
          </h2>
          <!-- Features 리스트 -->
          <div class="flex flex-wrap justify-center gap-8">
            <!-- 카드 시작 -->
            <a
              href="/DjangoPathMaker"
              class="wu-card max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Django Path Maker
              </h3>
              <p class="text-gray-400">
                Easily convert HTML paths to Django static paths, making your
                templates cleaner and more maintainable.
              </p>
            </a>
            <!-- 카드 시작 -->
            <a
              href="/AdsenceCalculator"
              class="wu-card max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Adsence Revenue Calculator
              </h3>
              <p class="text-gray-400">
                You can calculate the annual, monthly, and daily returns for
                Edsense.
              </p>
            </a>
            <!-- 카드 시작 -->
            <a
              href="/ExchangeRateCalculator"
              class="wu-card max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Exchange Rate Calculator
              </h3>
              <p class="text-gray-400">
                Convert real-time exchange rates between fiat and
                cryptocurrencies, and view a comparison chart with major
                currencies like USD, EUR, and KRW.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup can be used for additional logic if needed
</script>

<style scoped>
/* 추가적인 스타일을 적용할 수 있음 */
/* 카드 호버 시 그림자 애니메이션 */
.shadow-md:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

/* 카드 호버 시 배경색 변화 및 확대 효과 */
.wu-card:hover {
  background: linear-gradient(145deg, #be185dc4, #7e22cead);
  transform: scale(1.05); /* 크기 확대 */
  transition: background-color 0.3s ease, transform 0.3s ease;
}
</style>
