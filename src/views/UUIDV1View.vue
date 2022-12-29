<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Version 1 UUID</n-h2>
    <UUIDV1Generator :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <UUIDV1Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 1 UUID?</n-h2>
    <UUIDV1Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NH2 } from "naive-ui";
import UUIDV1Description from "@/components/uuid/description/UUIDV1Description.vue";
import UUIDV1Generator from "@/components/uuid/generator/UUIDV1Generator.vue";
import UUIDV1Config from "@/components/uuid/config/UUIDV1Config.vue";
import { generateMACAddress } from "@/utils/mac";
import BackToHome from "@/components/misc/BackToHome.vue";

const config = ref({
  macAddress: generateMACAddress(),
});
</script>
