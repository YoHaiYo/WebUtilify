<template>
  <!-- 네비바 -->
  <NavBar />
  <!--- 메인 -->
  <router-view></router-view>
  <!-- footer -->
  <!-- <Footer /> -->
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped lang="scss"></style>
