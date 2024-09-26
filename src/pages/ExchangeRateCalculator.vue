<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="pb-2 pl-3 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4"
      >
        Exchange Rate Calculator
      </h1>

      <div class="bg-gray-800 p-6 rounded-lg mb-6">
        <p class="mb-2 text-lg text-gray-300">
          This tool calculates real-time exchange rates between selected fiat
          currencies and popular cryptocurrencies, allowing you to easily and
          quickly convert values. Additionally, it displays a comparison chart
          that highlights the exchange rates of the selected currency against
          other major currencies like USD, EUR, KRW, and more.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div class="left-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">Input</h2>
          </div>

          <!-- From : 실제화폐  -->
          <label class="text-gray-300">From Fiat Currency:</label>
          <select
            v-model="fromCurrency"
            @change="fetchCurrencyRates"
            class="mt-2 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg"
          >
            <option
              v-for="(currency, code) in data.fiatCurrencies"
              :key="code"
              :value="code"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </option>
          </select>
          <!-- From : 가상화폐  -->
          <label class="text-gray-300 mt-2">From Crypto Currency:</label>
          <select
            v-model="fromCurrency"
            @change="fetchCurrencyRates"
            class="mt-2 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg"
          >
            <option
              v-for="(currency, code) in data.cryptocurrencies"
              :key="code"
              :value="code"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </option>
          </select>

          <label class="text-gray-300 mt-4" for="fiatAmount">Amount:</label>
          <input
            id="fiatAmount"
            v-model.number="fiatAmount"
            type="number"
            class="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter amount"
          />

          <!-- TO : 현실화폐 -->
          <label class="text-gray-300 mt-4">To Fiat Currency:</label>
          <select
            v-model="toCurrency"
            class="mt-2 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg"
          >
            <option
              v-for="(currency, code) in data.fiatCurrencies"
              :key="code"
              :value="code"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </option>
          </select>
          <!-- TO : 가상화폐 -->
          <label class="text-gray-300 mt-2">To Crypto Currency:</label>
          <select
            v-model="toCurrency"
            class="mt-2 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg"
          >
            <option
              v-for="(currency, code) in data.cryptocurrencies"
              :key="code"
              :value="code"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </option>
          </select>

          <button
            @click="updateConversion"
            class="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none"
          >
            Convert
          </button>
        </div>

        <div class="right-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300">
              Conversion Result
            </h2>
          </div>
          <p class="text-violet-400 mb-3">(Calculated as of {{ date }})</p>
          <p class="text-gray-200">{{ conversionResult }}</p>
          <!-- 막대 그래프 추가 -->
          <canvas id="comparisonChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { data } from "../utils/currency";
import { Chart } from "chart.js/auto";

const fromCurrency = ref("usd");
const toCurrency = ref("krw");
const fiatAmount = ref(1);
const conversionResult = ref("");
const date = ref("");
const rates = ref({});
const majorCurrencies = ref(["usd", "eur", "krw", "jpy", "cny"]); // 주요 화폐들
let chartInstance = null;
const selectedCurrency = ref(null); // 마지막으로 선택된 To Currency 저장

// 달러 환율 기준으로 변환된 데이터를 얻는 함수
const getCurrencyComparisonData = () => {
  const usdToSelectedCurrencyRate = rates.value["usd"];
  if (usdToSelectedCurrencyRate) {
    return majorCurrencies.value.map((currency) => {
      const rate = rates.value[currency];
      return currency === "usd" ? 1 : rate / usdToSelectedCurrencyRate;
    });
  } else {
    return majorCurrencies.value.map(() => 0);
  }
};

// fetchCurrencyRates 함수로 환율을 가져오기
const fetchCurrencyRates = async () => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.value}.json`
    );
    const result = await response.json();

    if (result && result[fromCurrency.value]) {
      rates.value = result[fromCurrency.value];
      date.value = result.date;

      if (chartInstance) {
        updateChart();
      }
    } else {
      console.error("Invalid data received:", result);
    }
  } catch (error) {
    console.error("Error fetching currency rates:", error);
  }
};

// updateConversion 함수
const updateConversion = () => {
  const fromIsCrypto = data.cryptocurrencies[fromCurrency.value] !== undefined;
  const toIsCrypto = data.cryptocurrencies[toCurrency.value] !== undefined;

  const fromData = fromIsCrypto
    ? data.cryptocurrencies[fromCurrency.value]
    : data.fiatCurrencies[fromCurrency.value];

  const toData = toIsCrypto
    ? data.cryptocurrencies[toCurrency.value]
    : data.fiatCurrencies[toCurrency.value];

  const rate = rates.value[toCurrency.value];

  if (!isNaN(fiatAmount.value) && rate) {
    const result = (fiatAmount.value * rate).toFixed(2);
    conversionResult.value = `${fiatAmount.value} ${fromData.symbol} (${fromData.name}) = ${result} ${toData.symbol} (${toData.name})`;

    // 마지막 To Currency만 추가하고, 이전 선택은 제거
    if (
      selectedCurrency.value &&
      majorCurrencies.value.includes(selectedCurrency.value)
    ) {
      majorCurrencies.value.pop(); // 이전 선택 제거
    }

    // 새로운 선택된 To Currency 추가
    selectedCurrency.value = toCurrency.value;
    majorCurrencies.value.push(selectedCurrency.value);

    // 차트 업데이트
    updateChart();
  } else {
    conversionResult.value = "Invalid input or currency rate not available.";
  }
};

// 차트 업데이트 함수
const updateChart = () => {
  const comparisonData = getCurrencyComparisonData();

  if (chartInstance) {
    chartInstance.data.labels = majorCurrencies.value.map((currency) => {
      return currency === fromCurrency.value
        ? `${data.fiatCurrencies[currency]?.name || currency} (Selected)`
        : data.fiatCurrencies[currency]?.name || currency;
    });

    // 데이터와 색상 업데이트 (사용자가 선택한 화폐는 다른 색으로 강조)
    chartInstance.data.datasets[0].data = comparisonData;
    chartInstance.data.datasets[0].backgroundColor = majorCurrencies.value.map(
      (currency) => {
        return currency === selectedCurrency.value
          ? "rgba(255, 99, 132, 0.2)" // 선택된 화폐는 빨간색
          : "rgba(54, 162, 235, 0.2)"; // 나머지는 파란색
      }
    );
    chartInstance.data.datasets[0].borderColor = majorCurrencies.value.map(
      (currency) => {
        return currency === selectedCurrency.value
          ? "rgba(255, 99, 132, 1)" // 선택된 화폐는 빨간색
          : "rgba(54, 162, 235, 1)"; // 나머지는 파란색
      }
    );
    chartInstance.update();
  }
};

// 차트 생성 함수
const createChart = () => {
  const ctx = document.getElementById("comparisonChart").getContext("2d");

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: majorCurrencies.value.map((currency) => {
        return currency === fromCurrency.value
          ? `${data.fiatCurrencies[currency]?.name || currency} (Selected)`
          : data.fiatCurrencies[currency]?.name || currency;
      }),
      datasets: [
        {
          label: `Exchange Rate: ${fromCurrency.value} per 1 USD`,
          data: getCurrencyComparisonData(),
          backgroundColor: majorCurrencies.value.map((currency) => {
            return currency === selectedCurrency.value
              ? "rgba(255, 99, 132, 0.2)" // 선택된 화폐는 빨간색
              : "rgba(54, 162, 235, 0.2)"; // 나머지는 파란색
          }),
          borderColor: majorCurrencies.value.map((currency) => {
            return currency === selectedCurrency.value
              ? "rgba(255, 99, 132, 1)" // 선택된 화폐는 빨간색
              : "rgba(54, 162, 235, 1)"; // 나머지는 파란색
          }),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          type: "logarithmic", // 로그 스케일 적용
          beginAtZero: false,
          ticks: {
            min: 0.1, // 로그 스케일이기 때문에 0은 사용하지 않음
          },
        },
      },
    },
  });
};

// 초기화 시 첫 번째 화폐의 환율 가져오기
onMounted(() => {
  fetchCurrencyRates();
  createChart();
});

// 통화 변경 시 환율 갱신
watch([fromCurrency, toCurrency], async (newVal, oldVal) => {
  if (newVal !== oldVal) {
    await fetchCurrencyRates();
  }
});
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
  /* height: calc(80vh - 56px); */
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

input[type="number"],
select {
  font-family: "Roboto", sans-serif; /* Elegant font */
  font-size: 1rem;
  line-height: 1.5;
}

table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #4b5563;
  padding: 0.5rem;
  text-align: left;
}
th {
  background-color: #4b5563;
}
</style>
