<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4"
      >
        Django Path Maker
      </h1>

      <div class="bg-gray-800 p-6 rounded-lg mb-6">
        <p class="mb-2 text-lg text-gray-300">
          This tool helps you convert HTML code into a format suitable for
          Django templates.
          <br />
          Paste your HTML code into the input field, and it will convert paths
          to Django's static paths.
          <br />
          For example, an <code>href="static/myfile.css"</code> will be
          transformed into <code>href="{% static 'myfile.css' %}"</code>.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div
          class="left-panel bg-gray-800 border-r-2 border-gray-700 p-4 flex flex-col w-full lg:w-1/2"
        >
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">Input HTML</h2>
          </div>
          <textarea
            v-model="inputHtml"
            @input="processHtml"
            class="flex-grow p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Paste your HTML code here..."
          ></textarea>
        </div>

        <div class="right-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300">Processed HTML</h2>
            <button
              class="copy-button flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              @click="copyToClipboard"
            >
              <i class="fas fa-copy mr-2"></i>
              <span>{{ copyText }}</span>
            </button>
          </div>
          <pre
            class="flex-grow p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg overflow-auto"
            v-html="outputHtml"
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
  let highlightedHtml = processedHtml;

  // Django static 로딩 태그 추가
  if (!processedHtml.includes("{% load static %}")) {
    processedHtml = "{% load static %}\n" + processedHtml;
  }

  // href 변환 및 하이라이트
  highlightedHtml = processedHtml.replace(/href="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    const newHref = `href="{% static '${cleanedPath}' %}"`;
    return `<span style="background-color: #f472b6;">${newHref}</span>`;
  });

  // src 변환 및 하이라이트
  highlightedHtml = highlightedHtml.replace(/src="([^"]*)"/g, (match, p1) => {
    let cleanedPath = p1.replace(/^[^static]*static\/?/, "");
    const newSrc = `src="{% static '${cleanedPath}' %}"`;
    return `<span style="background-color: #f472b6;">${newSrc}</span>`;
  });

  outputHtml.value = highlightedHtml;
};

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(outputHtml.value.replace(/<[^>]+>/g, "")) // HTML 태그 제거 후 복사
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
@media (max-width: 990px) {
  .left-panel {
    height: auto;
    min-height: 50vh;
  }
  .right-panel {
    height: auto;
    min-height: 50vh;
  }
}

textarea,
pre {
  font-family: "Roboto", sans-serif; /* 세련된 폰트 사용 */
  font-size: 1rem;
  line-height: 1.5;
}

.wu-height {
  height: 30px;
}

/* 타이틀을 세련되게 */
h1 {
  font-size: 2.5rem;
  font-weight: 800;
}

/* 전체적인 스타일 조정 */
button.copy-button {
  transition: background-color 0.3s ease;
}

/* Dark 테마 스타일 */
textarea {
  background-color: #374151; /* 어두운 배경 */
  color: #d1d5db; /* 밝은 텍스트 */
}

pre span {
  font-weight: bold;
}

pre {
  background-color: #1f2937; /* 어두운 배경 */
  color: #f9fafb; /* 밝은 텍스트 */
}

code {
  font-weight: bold;
  color: #f472b6; /* 핑크색 포인트 */
}
</style>
