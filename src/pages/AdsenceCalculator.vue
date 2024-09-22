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

const revenueRates = {
  Health: 0.00387,
  Games: 0.005,
  Science: 0.004,
  Finance: 0.0174,
  News: 0.006,
  "Books and Literature": 0.0045,
  "Beauty, Fitness": 0.0055,
  "Real Estate": 0.0065,
  "Judicial and Government": 0.003,
  "Business, Industry": 0.007,
  Shopping: 0.008,
  Sports: 0.0045,
  "Food and Beverage": 0.0055,
  "Pets and Animals": 0.0035,
  Travel: 0.006,
  "Arts, Entertainment": 0.0045,
  "Online Communities": 0.0038,
  "People, Society": 0.004,
  "Internet - Communications": 0.0039,
  "Interior and Landscaping": 0.0042,
  Automobiles: 0.0052,
  Reference: 0.0033,
  "Hobbies, Leisure": 0.0038,
  "Employment, Education": 0.004,
  "Computers and Electronics": 0.0061,
};

// Define revenue variables
const southAmericaRevenue = ref(0);
const northAmericaRevenue = ref(0);
const asiaPacificRevenue = ref(0);
const emeaRevenue = ref(0);

const calculateRevenue = () => {
  const annualViews = monthlyPageViews.value * 12;

  // Calculate annual revenue for each region
  southAmericaRevenue.value = (
    annualViews *
    revenueRates[category.value] *
    0.00387
  ).toFixed(0);
  northAmericaRevenue.value = (
    annualViews *
    revenueRates[category.value] *
    0.0174
  ).toFixed(0);
  asiaPacificRevenue.value = (
    annualViews *
    revenueRates[category.value] *
    0.01577
  ).toFixed(0);
  emeaRevenue.value = (
    annualViews *
    revenueRates[category.value] *
    0.00534
  ).toFixed(0);
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
