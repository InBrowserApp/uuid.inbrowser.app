<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Decode UUID</n-h2>
    <UUIDInput v-model:uuid="uuid" />
    <n-h2 prefix="bar" align-text>Result</n-h2>
    <DecodeResult :uuid="uuid" />
    <div style="width: 100%" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import DecodeResult from "@/components/uuid/decode/DecodeResult.vue";
import UUIDInput from "@/components/misc/UUIDInput.vue";
import { v4 as uuidv4 } from "uuid";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Decode UUID | UUID InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Decode your UUID, get the version, variant, and other information. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://uuid.inbrowser.app/decode",
    },
  ],
});

const uuid = ref(uuidv4());
</script>
