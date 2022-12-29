<template>
  <n-form-item label="Namespace">
    <n-input
      v-model:value="namespaceRef"
      :placeholder="placeholder"
      :status="validated ? undefined : 'error'"
    >
      <template #suffix
        ><n-icon
          style="cursor: pointer"
          :component="RefreshOutline"
          @click="namespaceRef = uuidv4()"
      /></template>
    </n-input>
  </n-form-item>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { NInput, NIcon, NFormItem } from "naive-ui";
import RefreshOutline from "@vicons/ionicons5/RefreshOutline";
import { v4 as uuidv4, validate } from "uuid";

const placeholder = uuidv4();

const props = defineProps<{
  namespace: string;
}>();

const emit = defineEmits<{
  (event: "update:namespace", namespace: string): void;
}>();

const namespaceRef = ref(props.namespace);

const validated = computed(() => {
  return validate(namespaceRef.value);
});

watch(
  () => namespaceRef.value,
  (namespace: string) => {
    if (validate(namespace)) {
      emit("update:namespace", namespace);
    }
  }
);
</script>
