<template>
  <nav class="header-nav">
    <NavTools />
    <n-divider vertical />
    <NavGitHub />
    <n-divider vertical />
    <NavInBrowserApp />
  </nav>
</template>

<script lang="ts" setup>
import { NDivider } from "naive-ui";

import NavTools from "./NavTools.vue";
import NavGitHub from "./NavGitHub.vue";
import NavInBrowserApp from "./NavInBrowserApp.vue";
</script>

<style scoped>
@media (max-width: 1023px) {
  .header-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
