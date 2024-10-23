<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="pb-2 pl-3 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4"
      >
        Django Path Maker
      </h1>

      <div class="bg-gray-800 p-6 rounded-lg mb-6">
        <p class="mb-2 text-lg text-gray-300">
          This tool converts HTML code into a format suitable for Django
          templates.
          <br />
          Paste your HTML code into the input field, and standard paths will be
          converted to Django's static paths.
          <br />
          For example,
          <code class="text-pink-500">href="static/myfile.css"</code> will be
          transformed into
          <code class="text-pink-500">href="{% static 'myfile.css' %}"</code>.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div class="bg-gray-800 p-4 flex flex-col w-full">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">
              For copy short something
            </h2>
          </div>
          <textarea
            class="flex-grow p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
{% load static %}</textarea
          >
        </div>
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div class="left-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">Input HTML</h2>
          </div>
          <textarea
            v-model="inputHtml"
            @input="processHtml"
            class="flex-grow p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Paste your HTML code here..."
          ></textarea>
        </div>
        <div class="right-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300">Processed HTML</h2>
            <button
              class="copy-button flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none"
              @click="copyToClipboard"
            >
              <i class="fas fa-copy mr-1"></i>
              <span>{{ copyText }}</span>
            </button>
          </div>
          <pre
            class="flex-grow p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg overflow-auto"
            v-html="outputHtml"
          ></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// 함수: HTML 특수문자를 이스케이프 처리
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const inputHtml = ref("");
const outputHtml = ref("");
const copyText = ref("Copy Result");

const processHtml = () => {
  let processedHtml = inputHtml.value;

  // 특수문자 이스케이프 처리
  let escapedHtml = escapeHtml(processedHtml);

  // if (!processedHtml.includes("{% load static %}")) {
  //   escapedHtml = "{% load static %}\n" + escapedHtml;
  // }

  // 변경된 부분을 하이라이트 처리
  escapedHtml = escapedHtml.replace(/href="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    let highlighted = `<span class="bg-pink-500">href="{% static '${cleanedPath}' %}"</span>`;
    return highlighted;
  });

  escapedHtml = escapedHtml.replace(/src="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    let highlighted = `<span class="bg-pink-500">src="{% static '${cleanedPath}' %}"</span>`;
    return highlighted;
  });

  // 변경되지 않은 href와 src도 표시
  escapedHtml = escapedHtml.replace(/(href|src)="([^"]*)"/g, (match) => {
    return `<span>${match}</span>`;
  });

  outputHtml.value = escapedHtml;
};

const copyToClipboard = () => {
  // 텍스트 내용만 복사 (HTML 태그 제외)
  const tempElement = document.createElement("div");
  tempElement.innerHTML = outputHtml.value;
  const textToCopy = tempElement.textContent || tempElement.innerText || "";

  navigator.clipboard
    .writeText(textToCopy)
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

// inputHtml의 변경을 감지합니다.
watch(inputHtml, processHtml);
</script>

<style scoped>
.left-panel {
  margin-right: 5px;
}
.right-panel {
  margin-left: 5px;
}
.left-panel,
.right-panel {
  height: calc(80vh - 60px);
  border: 1px solid #b6b6b6ad;
  border-radius: 0.5rem;
}
@media (max-width: 990px) {
  .left-panel {
    height: auto;
    min-height: 50vh;
    margin-right: 0;
  }
  .right-panel {
    margin-top: 10px;
    height: auto;
    min-height: 50vh;
    margin-left: 0;
  }
}

textarea,
pre {
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
