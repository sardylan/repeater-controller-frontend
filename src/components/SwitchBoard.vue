<script setup lang="ts">
import Switch from "./Switch.vue";

const props = defineProps(["size", "titles", "enabled", "values"]);

function toggleButton(num: number) {
  console.log(`Toggled button ${num}`);
  if (!props.enabled) {
    return;
  }

  const oldValue: boolean = props.values[num];
  const newValue: boolean = !oldValue;
  console.log(`Toggling button ${num} - OLD: ${oldValue} - NEW: ${newValue}`);

  props.enabled[num] = false;

  props.values[num] = newValue;
  setTimeout(() => {
    props.enabled[num] = true;
  }, 1000);
}
</script>

<template>
  <div class="switchboard">
    <Switch
      v-for="item in Array(size).keys()"
      :key="item"
      :title="titles[item]"
      :enabled="enabled[item]"
      :value="values[item]"
      @toogled="
        () => {
          toggleButton(item);
        }
      "
    />
  </div>
</template>

<style scoped>
div.switchboard {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media (max-width: 800px) {
  div.switchboard {
    flex-direction: column;
  }
}

div.switchboard * {
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  margin: 5px;
}
</style>
