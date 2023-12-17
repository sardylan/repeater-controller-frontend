import { defineStore } from "pinia";

export const statusStore = defineStore("status", {
  state: () => ({
    size: 8,
    titles: [
      "Rele 1",
      "Rele 2",
      "Rele 3",
      "Rele 4",
      "Rele 5",
      "Rele 6",
      "Rele 7",
      "Rele 8",
    ],
    enabled: [true, true, true, true, true, true, true, true],
    values: [false, false, false, false, false, true, false, false],
  }),
});
