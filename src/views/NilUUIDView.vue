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
</script>
