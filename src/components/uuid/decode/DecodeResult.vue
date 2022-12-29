<template>
  <UndefinedResult />
</template>

<script setup lang="ts">
import UndefinedResult from './UndefinedResult.vue';

defineProps<{
  uuid: string | undefined;
}>();
</script>
