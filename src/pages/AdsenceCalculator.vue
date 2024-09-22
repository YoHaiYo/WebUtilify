<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto p-4 flex-grow">
      <h1
        class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4"
        style="height: 50px"
      >
        AdSense Revenue Calculator
      </h1>

      <div class="bg-gray-800 p-6 rounded-lg mb-6">
        <p class="mb-2 text-lg text-gray-300">
          This tool calculates the expected AdSense revenue based on the monthly
          page views you enter.
        </p>
        <a
          class="text-blue-500"
          href="https://adsense.google.com/intl/ko_kr/start/"
          >Google Source Data</a
        >
      </div>

      <div class="flex flex-col lg:flex-row overflow-hidden">
        <div
          class="left-panel bg-gray-800 border-r-2 border-gray-700 p-4 flex flex-col w-full lg:w-1/2"
        >
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300 mb-2">Input</h2>
          </div>

          <label class="text-gray-300" for="pageViews"
            >Monthly Page Views:</label
          >
          <input
            id="pageViews"
            v-model.number="monthlyPageViews"
            type="number"
            class="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter monthly page views"
          />
          <input
            type="range"
            min="0"
            max="10000000"
            v-model="monthlyPageViews"
            class="mt-2 w-full"
            @input="updateSlider"
          />

          <select
            v-model="category"
            class="mt-2 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg"
          >
            <option>Health</option>
            <option>Games</option>
            <option>Science</option>
            <option>Finance</option>
            <option>News</option>
            <option>Books and Literature</option>
            <option>Beauty, Fitness</option>
            <option>Real Estate</option>
            <option>Judicial and Government</option>
            <option>Business, Industry</option>
            <option>Shopping</option>
            <option>Sports</option>
            <option>Food and Beverage</option>
            <option>Pets and Animals</option>
            <option>Travel</option>
            <option>Arts, Entertainment</option>
            <option>Online Communities</option>
            <option>People, Society</option>
            <option>Internet - Communications</option>
            <option>Interior and Landscaping</option>
            <option>Automobiles</option>
            <option>Reference</option>
            <option>Hobbies, Leisure</option>
            <option>Employment, Education</option>
            <option>Computers and Electronics</option>
          </select>

          <button
            @click="calculateRevenue"
            class="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none"
          >
            Calculate Revenue
          </button>
        </div>

        <div class="right-panel bg-gray-800 p-4 flex flex-col w-full lg:w-1/2">
          <div class="wu-height flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-300">
              Expected Revenue
            </h2>
          </div>
          <table class="min-w-full text-left">
            <thead>
              <tr>
                <th class="text-gray-300">Region</th>
                <th class="text-gray-300">Annual Revenue ($)</th>
                <th class="text-gray-300">Monthly Revenue ($)</th>
                <th class="text-gray-300">Daily Revenue ($)</th>
              </tr>
            </thead>
            <tbody class="text-gray-200">
              <tr>
                <td>South America</td>
                <td>{{ formatCurrency(southAmericaRevenue) }}</td>
                <td>
                  {{ formatCurrency((southAmericaRevenue / 12).toFixed(0)) }}
                </td>
                <td>
                  {{ formatCurrency((southAmericaRevenue / 365).toFixed(0)) }}
                </td>
              </tr>
              <tr>
                <td>North America</td>
                <td>{{ formatCurrency(northAmericaRevenue) }}</td>
                <td>
                  {{ formatCurrency((northAmericaRevenue / 12).toFixed(0)) }}
                </td>
                <td>
                  {{ formatCurrency((northAmericaRevenue / 365).toFixed(0)) }}
                </td>
              </tr>
              <tr>
                <td>Asia Pacific</td>
                <td>{{ formatCurrency(asiaPacificRevenue) }}</td>
                <td>
                  {{ formatCurrency((asiaPacificRevenue / 12).toFixed(0)) }}
                </td>
                <td>
                  {{ formatCurrency((asiaPacificRevenue / 365).toFixed(0)) }}
                </td>
              </tr>
              <tr>
                <td>Europe, Middle East, Africa</td>
                <td>{{ formatCurrency(emeaRevenue) }}</td>
                <td>{{ formatCurrency((emeaRevenue / 12).toFixed(0)) }}</td>
                <td>{{ formatCurrency((emeaRevenue / 365).toFixed(0)) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const monthlyPageViews = ref(50000); // Fixed value
const category = ref("Finance");

// 조회수 1당 연수입 달러
const yearRevenue = {
  SouthAmerica: {
    Health: 0.04644,
    Games: 0.0384,
    Science: 0.0318,
    Finance: 0.24192,
    News: 0.01164,
    "Books and Literature": 0.03468,
    "Beauty, Fitness": 0.0468,
    "Real Estate": 0.04236,
    "Judicial and Government": 0.09576,
    "Business, Industry": 0.09108,
    Shopping: 0.05432,
    Sports: 0.02088,
    "Food and Beverage": 0.0384,
    "Pets and Animals": 0.03732,
    Travel: 0.06228,
    "Arts, Entertainment": 0.02724,
    "Online Communities": 0.07212,
    "People, Society": 0.03504,
    "Internet - Communications": 0.105,
    "Interior and Landscaping": 0.07092,
    Automobiles: 0.04884,
    Reference: 0.0426,
    "Hobbies, Leisure": 0.04488,
    "Employment, Education": 0.10932,
    "Computers and Electronics": 0.06804,
  },
  NorthAmerica: {
    Health: 0.2088,
    Games: 0.05244,
    Science: 0.08856,
    Finance: 0.38556,
    News: 0.04044,
    "Books and Literature": 0.06492,
    "Beauty, Fitness": 0.15612,
    "Real Estate": 0.174,
    "Judicial and Government": 0.15396,
    "Business, Industry": 0.21996,
    Shopping: 0.168,
    Sports: 0.05076,
    "Food and Beverage": 0.17196,
    "Pets and Animals": 0.10092,
    Travel: 0.1692,
    "Arts, Entertainment": 0.06744,
    "Online Communities": 0.13056,
    "People, Society": 0.10404,
    "Internet - Communications": 0.1746,
    "Interior and Landscaping": 0.2802,
    Automobiles: 0.1104,
    Reference: 0.13428,
    "Hobbies, Leisure": 0.13236,
    "Employment, Education": 0.14844,
    "Computers and Electronics": 0.11016,
  },
  AsiaPacific: {
    Health: 0.18924,
    Games: 0.0696,
    Science: 0.08004,
    Finance: 0.30024,
    News: 0.0402,
    "Books and Literature": 0.02592,
    "Beauty, Fitness": 0.1878,
    "Real Estate": 0.20004,
    "Judicial and Government": 0.12384,
    "Business, Industry": 0.17436,
    Shopping: 0.16248,
    Sports: 0.0852,
    "Food and Beverage": 0.14088,
    "Pets and Animals": 0.1338,
    Travel: 0.1164,
    "Arts, Entertainment": 0.0696,
    "Online Communities": 0.09468,
    "People, Society": 0.08244,
    "Internet - Communications": 0.13476,
    "Interior and Landscaping": 0.22056,
    Automobiles: 0.12756,
    Reference: 0.1368,
    "Hobbies, Leisure": 0.12648,
    "Employment, Education": 0.08544,
    "Computers and Electronics": 0.12672,
  },
  EMEA: {
    Health: 0.06408,
    Games: 0.04824,
    Science: 0.04572,
    Finance: 0.23364,
    News: 0.024,
    "Books and Literature": 0.0318,
    "Beauty, Fitness": 0.08304,
    "Real Estate": 0.06228,
    "Judicial and Government": 0.06456,
    "Business, Industry": 0.099,
    Shopping: 0.09252,
    Sports: 0.03132,
    "Food and Beverage": 0.05976,
    "Pets and Animals": 0.05964,
    Travel: 0.09756,
    "Arts, Entertainment": 0.04344,
    "Online Communities": 0.0702,
    "People, Society": 0.03912,
    "Internet - Communications": 0.10548,
    "Interior and Landscaping": 0.12936,
    Automobiles: 0.06672,
    Reference: 0.06024,
    "Hobbies, Leisure": 0.06444,
    "Employment, Education": 0.05856,
    "Computers and Electronics": 0.09168,
  },
};

// 지역별 연수입
const southAmericaRevenue = ref(0);
const northAmericaRevenue = ref(0);
const asiaPacificRevenue = ref(0);
const emeaRevenue = ref(0);

const calculateRevenue = () => {
  const annualViews = monthlyPageViews.value * 1;

  // Calculate annual revenue for each region based on selected category
  southAmericaRevenue.value = (
    annualViews * yearRevenue.SouthAmerica[category.value]
  ).toFixed(0);
  northAmericaRevenue.value = (
    annualViews * yearRevenue.NorthAmerica[category.value]
  ).toFixed(0);
  asiaPacificRevenue.value = (
    annualViews * yearRevenue.AsiaPacific[category.value]
  ).toFixed(0);
  emeaRevenue.value = (annualViews * yearRevenue.EMEA[category.value]).toFixed(
    0
  );
};

const formatCurrency = (value) => {
  return Number(value).toLocaleString(); // Add commas for thousands
};

const updateSlider = () => {
  // Slider update logic (if needed)
};
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

/* Stylish title */
h1 {
  font-size: 2.5rem;
  font-weight: 800;
}

/* General style adjustments */
button {
  transition: background-color 0.3s ease;
}

/* Dark theme styles */
input[type="number"],
select {
  background-color: #374151; /* Dark background */
  color: #d1d5db; /* Light text */
}
input[type="range"] {
  background-color: #374151; /* Dark background */
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
