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
    Copy to Clipboard
  </n-tooltip>
</template>

<script setup lang="ts">
import { NText, NTooltip } from "naive-ui";
import { useMessage } from "naive-ui";

const message = useMessage();

const props = defineProps<{
  uuid: string;
}>();

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.uuid);
  message.success("Copied to clipboard");
};
</script>
