<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text>
      <template #icon>
        <n-icon :component="ToolsAlt" />
      </template>
      Tools</n-button
    >
  </n-dropdown>
</template>

<script lang="ts" setup>
import { NDropdown, NButton, NIcon } from "naive-ui";
import { useRouter } from "vue-router";
import ToolsAlt from "@vicons/carbon/ToolsAlt";

const router = useRouter();

const options = [
  {
    label: "UUID Generator",
    key: "uuid",
    children: [
      {
        label: "Version 1",
        key: "uuidv1",
      },
      {
        label: "Version 3",
        key: "uuidv3",
      },
      {
        label: "Version 4",
        key: "uuidv4",
      },
      {
        label: "Version 5",
        key: "uuidv5",
      },
      {
        label: "Nil UUID",
        key: "nil-uuid",
      },
    ],
  },
  {
    label: "Bulk UUID Generator",
    key: "bulk",
    children: [
      {
        label: "Version 1",
        key: "bulk-v1",
      },
      {
        label: "Version 4",
        key: "bulk-v4",
      },
    ],
  },
  {
    label: "Utilities",
    key: "utilities",
    children: [
      {
        label: "Decode UUID",
        key: "decode",
      },
    ],
  },
];

const handleSelect = (key: string | number) => {
  const routes = [
    "uuidv1",
    "uuidv3",
    "uuidv4",
    "uuidv5",
    "nil-uuid",
    "bulk-v1",
    "bulk-v4",
    "decode",
  ] as string[];
  if (routes.includes(key as any)) {
    console.log(key);
    router.push({
      name: key as string,
    });
  }
};
</script>
