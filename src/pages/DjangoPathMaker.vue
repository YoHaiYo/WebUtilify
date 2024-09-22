<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="inline text-3xl font-bold mb-2 bg-violet-500 text-white p-4 rounded-md shadow-md"
      >
        Django Path Maker
      </h1>
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <p class="mb-2 text-lg text-gray-700">
          This tool helps you convert HTML code into a format suitable for
          Django templates.
          <br />
          Simply paste your HTML code into the input field, and any standard
          paths will be converted to Django's static paths.
          <br />
          For example, an <code>href="static/myfile.css"</code> will be
          transformed into <code>href="{% static 'myfile.css' %}"</code>.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div
          class="left-panel bg-white border-r-2 border-gray-200 p-4 flex flex-col w-full lg:w-1/2"
        >
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold mb-2">Input HTML</h2>
          </div>
          <textarea
            v-model="inputHtml"
            @input="processHtml"
            class="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Paste your HTML code here..."
          ></textarea>
        </div>
        <div class="right-panel bg-white p-4 flex flex-col w-full lg:w-1/2">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold">Processed HTML</h2>
            <button
              class="copy-button flex items-center bg-violet-600 text-white px-3 py-2 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              @click="copyToClipboard"
            >
              <i class="fas fa-copy mr-1"></i>
              <span>{{ copyText }}</span>
            </button>
          </div>
          <pre
            class="flex-grow p-2 border border-gray-300 rounded-md overflow-auto bg-gray-50"
            v-text="outputHtml"
          ></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const inputHtml = ref("");
const outputHtml = ref("");
const copyText = ref("Copy Result");

const processHtml = () => {
  let processedHtml = inputHtml.value;

  if (!processedHtml.includes("{% load static %}")) {
    processedHtml = "{% load static %}\n" + processedHtml;
  }

  processedHtml = processedHtml.replace(/href="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    return `href="{% static '${cleanedPath}' %}"`;
  });

  processedHtml = processedHtml.replace(/src="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    return `src="{% static '${cleanedPath}' %}"`;
  });

  outputHtml.value = processedHtml;
};

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(outputHtml.value)
    .then(() => {
      copyText.value = "Copied!";
      setTimeout(() => {
        copyText.value = "Copy Result";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

// Watch the inputHtml for changes
watch(inputHtml, processHtml);
</script>

<style scoped>
.left-panel,
.right-panel {
  height: calc(80vh - 56px);
}

textarea,
pre {
  font-family: inherit; /* Ensure font consistency */
  font-size: 1rem; /* Match font size */
  line-height: 1.5; /* Match line height */
}
</style>
