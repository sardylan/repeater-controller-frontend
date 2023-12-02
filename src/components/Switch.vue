<script setup lang="ts">
defineProps(["title", "enabled", "value"]);
defineEmits(["toogled"]);
</script>

<template>
  <div
    class="switch"
    :class="enabled ? (value ? 'switch-on' : 'switch-off') : 'switch-disabled'"
    @click="enabled && $emit('toogled')"
  >
    {{ title }}
  </div>
</template>

<style scoped>
div.switch {
  display: flex;
  justify-content: center;

  padding: 1em;
  border-radius: 0.5em;

  font-size: larger;
  font-weight: bold;
}

.switch-on {
  color: #242424;
  background-color: lightgreen;
}

.switch-off {
  color: antiquewhite;
  background-color: firebrick;
}

.switch-disabled {
  color: darkslategrey;
  background-color: dimgray;
}
</style>
