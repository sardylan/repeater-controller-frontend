<script setup lang="ts">
import SwitchBoard from "./components/SwitchBoard.vue";
import status from "./status.ts";
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
