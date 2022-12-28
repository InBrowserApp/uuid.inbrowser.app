<template>
  <UUIDDisplay :uuid="uuid" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import UUIDDisplay from "@/components/uuid/UUIDDisplay.vue";

const uuid = ref(uuidv4());
</script>
