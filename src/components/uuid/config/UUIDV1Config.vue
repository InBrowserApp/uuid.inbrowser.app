<template>
  <MACAddressInput v-model:address="config.macAddress" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import MACAddressInput from "@/components/misc/MACAddressInput.vue";
import type { UUIDV1Config } from "./UUIDV1Config";

const props = defineProps<{
  config: UUIDV1Config;
}>();

const emit = defineEmits<{
  (event: "update:config", config: UUIDV1Config): void;
}>();

const config = computed({
  get: () => props.config,
  set: (config: UUIDV1Config) => emit("update:config", config),
});
</script>
