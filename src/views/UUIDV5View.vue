<template>
  <main>
    <n-h2 prefix="bar" align-text>Version 3 UUID</n-h2>
    <UUIDV5Generator :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <UUIDV35Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 3 UUID?</n-h2>
    <UUIDV1Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import type { UUIDV35Config as UUIDV35ConfigType } from "@/utils/uuid/config/UUIDV35Config";
import UUIDV1Description from "@/components/uuid/description/UUIDV1Description.vue";
import UUIDV5Generator from "@/components/uuid/generator/UUIDV5Generator.vue";
import UUIDV35Config from "@/components/uuid/config/UUIDV35Config.vue";
import { v4 as uuidv4 } from "uuid";

const config = ref<UUIDV35ConfigType>({
  namespace: uuidv4(),
  name: "example",
});
</script>
