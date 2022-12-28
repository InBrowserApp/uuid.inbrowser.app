<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-text
        code
        style="word-break: break-all; font-size: 2em; cursor: pointer"
        @click="copyToClipboard"
      >
        {{ uuid }}
      </n-text>
    </template>
    <n-icon :component="Clipboard16Regular" /> Copy to Clipboard
  </n-tooltip>
</template>

<script setup lang="ts">
import { NText, NTooltip, NIcon } from "naive-ui";
import { useMessage } from "naive-ui";
import Clipboard16Regular from "@vicons/fluent/Clipboard16Regular";

const message = useMessage();

const props = defineProps<{
  uuid: string;
}>();

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.uuid);
  message.success("Copied to clipboard");
};
</script>
