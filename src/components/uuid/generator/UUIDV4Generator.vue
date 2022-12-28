<template>
  <div>
    <UUIDDisplay :uuid="uuid" />
  </div>
  <div>
    <n-space>
      <RegenerateButton @click="refresh" />
      <CopyToClipboardButton @click="copyToClipboard" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import UUIDDisplay from "@/components/uuid/UUIDDisplay.vue";
import { NSpace, useMessage } from "naive-ui";
import RegenerateButton from "@/components/controls/RegenerateButton.vue";
import CopyToClipboardButton from "@/components/controls/CopyToClipboardButton.vue";

const message = useMessage();
const uuid = ref(uuidv4());

const refresh = () => {
  uuid.value = uuidv4();
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(uuid.value);
  message.success("Copied to clipboard");
};
</script>
