<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4"
        style="height: 50px"
      >
        Exchange Rate Calculator
      </h1>

      <div class="bg-gray-800 p-6 rounded-lg mb-6">
        <p class="mb-2 text-lg text-gray-300">
          This tool calculates the conversion rates for selected currencies.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div
          class="left-panel bg-gray-800 border-r-2 border-gray-700 p-4 flex flex-col w-full lg:w-1/2"
        >
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">Input</h2>
          </div>

          <label class="text-gray-300" for="currency-select"
            >Select Currency:</label
          >
          <select
            id="currency-select"
            v-model="selectedCurrency"
            @change="fetchCurrencyRates(selectedCurrency)"
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

          <label class="text-gray-300 mt-4" for="fiatAmount">Amount:</label>
          <input
            id="fiatAmount"
            v-model.number="fiatAmount"
            type="number"
            class="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter amount"
          />

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
          <p class="text-gray-200">{{ conversionResult }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { data } from "../utils/currency"; // 통화코드 데이터

const selectedCurrency = ref(Object.keys(data.fiatCurrencies)[0]);
const fiatAmount = ref(0);
const conversionResult = ref("");

const rates = ref({});

const fetchCurrencyRates = async (currencyCode) => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`
    );
    const result = await response.json();
    rates.value = result[currencyCode];
  } catch (error) {
    console.error("Error fetching currency rates:", error);
  }
};

const updateConversion = () => {
  const rate = rates.value[selectedCurrency.value];
  if (!isNaN(fiatAmount.value) && rate) {
    const result = (fiatAmount.value * rate).toFixed(2);
    conversionResult.value = `${fiatAmount.value} ${
      data.fiatCurrencies[selectedCurrency.value].symbol
    } = ${result} in target currency`;
  } else {
    conversionResult.value = "Invalid input or currency rate not available.";
  }
};

fetchCurrencyRates(selectedCurrency.value); // 초기화 시 첫 번째 화폐의 환율 가져오기
</script>

<style scoped>
.left-panel,
.right-panel {
  height: calc(80vh - 56px);
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
