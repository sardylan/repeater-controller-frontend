<script setup lang="ts">
import SwitchBoard from "./components/SwitchBoard.vue";
import { statusStore } from "./status.ts";

const status = statusStore();
</script>

<template>
  <SwitchBoard
    :size="status.size"
    :titles="status.titles"
    :enabled="status.enabled"
    :values="status.values"
  />
</template>

<style scoped></style>
