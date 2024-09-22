<template>
  <section class="relative bg-white overflow-hidden">
    <div class="py-20 md:py-28">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to WebUtilify
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8">
            Transform the way you work with our suite of powerful tools designed
            to streamline your web development process.
            <br />
            From HTML path conversion to seamless integrations, WebUtilify
            empowers you to focus on what matters most—building exceptional web
            experiences.
          </p>
          <a
            class="inline-block py-4 px-6 text-lg font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-md shadow-lg transition duration-200"
            href="/DjangoPathMaker"
          >
            Get Started
          </a>
        </div>

        <div class="mt-16">
          <h2 class="text-3xl font-bold text-center mb-4">Features</h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="max-w-xs bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Django Path Maker</h3>
              <p class="text-gray-600">
                Easily convert HTML paths to Django static paths, making your
                templates cleaner and more maintainable.
              </p>
            </div>
            <div class="max-w-xs bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">HTML Formatter</h3>
              <p class="text-gray-600">
                Automatically format your HTML code to ensure it’s clean and
                well-structured for better readability.
              </p>
            </div>
            <div class="max-w-xs bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">CSS Minifier</h3>
              <p class="text-gray-600">
                Minimize your CSS files to improve loading times and enhance
                performance without sacrificing quality.
              </p>
            </div>
            <div class="max-w-xs bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">JavaScript Bundler</h3>
              <p class="text-gray-600">
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
/* Additional custom styles can be added here */
</style>
