import { defineStore } from "pinia";
import { ref } from "vue";
type availableTheme = "dark" | "light";
export const themeState = defineStore("theme", () => {
  const currentTheme = ref<availableTheme>("light");
  function toggleTheme() {
    // toggleTheme
    if (currentTheme.value == "dark") {
      currentTheme.value = "light";
    } else {
      currentTheme.value = "dark";
    }
  }
  return {
    currentTheme,
    toggleTheme,
  };
});
