<template>
  <main>
    <n-h2 prefix="bar" align-text>Version 1 UUID</n-h2>
    <UUIDV1Generator />
    <n-h2 prefix="bar" align-text>What is a version 1 UUID?</n-h2>
    <UUIDV1Description />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import UUIDV1Description from "@/components/uuid/description/UUIDV1Description.vue";
import UUIDV1Generator from "@/components/uuid/generator/UUIDV1Generator.vue";
</script>
