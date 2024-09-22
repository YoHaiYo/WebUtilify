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
            Features
          </h2>
          <!-- Features 리스트 -->
          <div class="flex flex-wrap justify-center gap-8">
            <!-- Django Path Maker 카드 -->
            <div
              class="max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Django Path Maker
              </h3>
              <p class="text-gray-400">
                Easily convert HTML paths to Django static paths, making your
                templates cleaner and more maintainable.
              </p>
            </div>
            <!-- HTML Formatter 카드 -->
            <div
              class="max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                HTML Formatter
              </h3>
              <p class="text-gray-400">
                Automatically format your HTML code to ensure it’s clean and
                well-structured for better readability.
              </p>
            </div>
            <!-- CSS Minifier 카드 -->
            <div
              class="max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                CSS Minifier
              </h3>
              <p class="text-gray-400">
                Minimize your CSS files to improve loading times and enhance
                performance without sacrificing quality.
              </p>
            </div>
            <!-- JavaScript Bundler 카드 -->
            <div
              class="max-w-xs bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                JavaScript Bundler
              </h3>
              <p class="text-gray-400">
                Bundle and optimize your JavaScript files for faster execution
                and improved user experience.
              </p>
            </div>
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

/* 버튼에 호버 시 약간의 확대 애니메이션 추가 */
a:hover {
  /* transform: scale(1.05); */
}
</style>
