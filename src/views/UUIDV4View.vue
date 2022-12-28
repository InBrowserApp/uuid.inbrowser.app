<template>
  <main>
    <n-h2 prefix="bar" align-text>Version 4 UUID</n-h2>
    <UUIDV4Generator />
    <UUIDV4Description />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import UUIDV4Description from "@/components/uuid/description/UUIDV4Description.vue";
import UUIDV4Generator from "@/components/uuid/generator/UUIDV4Generator.vue";
</script>
