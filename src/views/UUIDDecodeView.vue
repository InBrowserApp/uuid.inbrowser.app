<template>
  <main>
    <n-h2 prefix="bar" align-text>Decode UUID</n-h2>
    <UUIDInput v-model:uuid="uuid" />
    <n-h2 prefix="bar" align-text>Result</n-h2>
    <DecodeResult :uuid="uuid" />
    <n-h2 prefix="bar" align-text>What is a version 1 UUID?</n-h2>
    <UUIDV1Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import UUIDV1Description from "@/components/uuid/description/UUIDV1Description.vue";
import DecodeResult from "@/components/uuid/decode/DecodeResult.vue";
import UUIDInput from "@/components/misc/UUIDInput.vue";
import { v4 as uuidv4 } from "uuid";

const uuid = ref(uuidv4());
</script>
