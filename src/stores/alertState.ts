import { defineStore } from "pinia";
import { ref } from "vue";
type alertTypes = "error" | "success";
export const alertState = defineStore("alert", () => {
  const alertData = ref("");
  const alertTitle = ref("");
  const showAlert = ref(false);
  const alertType = ref<alertTypes>("success");
  return {
    alertData,
    showAlert,
    alertType,
    alertTitle,
  };
});
