<template>
  <UndefinedResult v-if="!uuid" />
  <DecodeV4 v-if="uuid" :uuid="uuid" />
</template>

<script setup lang="ts">
import UndefinedResult from "./UndefinedResult.vue";
import DecodeV4 from "./DecodeV4.vue";

defineProps<{
  uuid: string | undefined;
}>();
</script>
