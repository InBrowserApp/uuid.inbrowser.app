<template>
  <main>
    <n-h2 prefix="bar" align-text>Get a Random UUID</n-h2>
    <UUIDV4Generator />
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
    UUID Generator:
    <router-link to="/v1" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 1</n-a>
    </router-link>
    <n-divider vertical />
    <router-link to="/v3" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 3</n-a>
    </router-link>
    <n-divider vertical />
    <router-link to="/v4" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 4</n-a>
    </router-link>
    <n-divider vertical />
    <router-link to="/v5" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 5</n-a>
    </router-link>
    <n-divider vertical />
    <router-link to="/nil" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Nil UUID</n-a>
    </router-link>
    <br />
    Bulk UUID Generator:
    <router-link to="/bulk/v1" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 1</n-a>
    </router-link>
    <n-divider vertical />
    <router-link to="/bulk/v4" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Version 4</n-a>
    </router-link>
    <br />
    Utilities:
    <router-link to="/decode" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate">Decode UUID</n-a>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { NH2, NDivider, NA } from "naive-ui";
import UUIDV4Generator from "@/components/uuid/generator/UUIDV4Generator.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "UUID InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "UUID InBrowser.App is a tool to generate and decode UUIDs. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://uuid.inbrowser.app/",
    },
  ],
});
</script>
