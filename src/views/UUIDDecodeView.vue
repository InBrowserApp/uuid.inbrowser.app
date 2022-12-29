<template>
  <main>
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

const uuid = ref(uuidv4());
</script>
