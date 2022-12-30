<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Nil UUID</n-h2>
    <NilUUIDGenerator />
    <n-h2 prefix="bar" align-text>What is a Nil UUID</n-h2>
    <NilUUIDDescription />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import NilUUIDDescription from "@/components/uuid/description/NilUUIDDescription.vue";
import NilUUIDGenerator from "@/components/uuid/generator/NilUUIDGenerator.vue";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Nil UUID Generator | UUID InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Generate Nil UUID. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://uuid.inbrowser.app/nil",
    },
  ],
});
</script>
