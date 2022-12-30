<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Bulk Version 1 UUID</n-h2>
    <BulkUUIDV1Generator :size="size" :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <BulkSizeInput v-model:size="size" />
    <UUIDV1Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 1 UUID?</n-h2>
    <UUIDV1Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import UUIDV1Description from "@/components/uuid/description/UUIDV1Description.vue";
import BulkUUIDV1Generator from "@/components/uuid/generator/BulkUUIDV1Generator.vue";
import BulkSizeInput from "@/components/uuid/config/BulkSizeInput.vue";
import { generateMACAddress } from "@/utils/mac";
import UUIDV1Config from "@/components/uuid/config/UUIDV1Config.vue";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Bulk Version 1 UUID Generator | UUID InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Generate bulk version 1 UUIDs. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://uuid.inbrowser.app/bulk/v1",
    },
  ],
});

const size = ref(10);
const config = ref({
  macAddress: generateMACAddress(),
});
</script>
