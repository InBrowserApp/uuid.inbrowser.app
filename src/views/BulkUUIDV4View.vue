<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Bulk Version 4 UUID</n-h2>
    <BulkUUIDV4Generator :size="size" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <BulkSizeInput v-model:size="size" />
    <n-h2 prefix="bar" align-text>What is a version 4 UUID?</n-h2>
    <UUIDV4Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import UUIDV4Description from "@/components/uuid/description/UUIDV4Description.vue";
import BulkUUIDV4Generator from "@/components/uuid/generator/BulkUUIDV4Generator.vue";
import BulkSizeInput from "@/components/uuid/config/BulkSizeInput.vue";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Bulk Version 4 UUID Generator | UUID InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Generate bulk version 4 UUIDs. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://uuid.inbrowser.app/bulk/v4",
    },
  ],
});

const size = ref(10);
</script>
