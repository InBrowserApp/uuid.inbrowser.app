<template>
  <header>
    <HeaderText />
  </header>
</template>

<script lang="ts" setup>
import HeaderText from "./HeaderText.vue";
</script>

<style scoped>
header {
  max-height: 100vh;
}

@media (max-width: 1023px) {
  .nav {
    margin-bottom: 25px;
  }
}
</style>
