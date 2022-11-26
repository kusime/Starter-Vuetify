<script setup lang="ts">
import InfoCard from "@/components/InfoCard";

import { ref } from "vue";
import { themeState } from "@/stores/themeState";
import axios from "axios";
import { alertState } from "@/stores/alertState";
import { storeToRefs } from "pinia";

const clicked = ref<boolean>(false);
const toggleClick = () => {
  console.log(clicked.value);
  clicked.value = true;
  setTimeout(() => (clicked.value = false), 1200);
};
const options = {
  method: "GET",
  url: "https://random-data-api.com/api/v2/users",
  // headers: {
  //   "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //   "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  // },
};
const alert = alertState();
const theme = themeState();
const { showAlert, alertData, alertType, alertTitle } = storeToRefs(alert);
function sendRequest() {
  axios
    .request(options)
    .then(function (response) {
      showAlert.value = true;
      alertTitle.value = "Request Send Successfully";
      alertData.value = response.data["uid"];
      alertType.value = "success";
      setTimeout(() => {
        showAlert.value = false;
      }, 1500);
    })
    .catch(function (error) {
      showAlert.value = true;
      alertTitle.value = "Request Send Failed";
      alertData.value = "Api not response normally ...";
      alertType.value = "error";
      setTimeout(() => {
        showAlert.value = false;
      }, 1500);
      console.error(error);
    });
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-40 pt-10 w-full translate-y-20">
    <div class="w-full flex justify-center items-center">
      <transition name="bounce">
        <v-alert
          v-if="showAlert"
          icon="mdi-vuetify"
          :title="alertTitle"
          :text="alertData"
          :type="alertType"
          variant="tonal"
          class="max-w-2xl"
        ></v-alert>
      </transition>
    </div>
  </div>

  <InfoCard>
    <v-btn
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      @click="
        sendRequest();
        toggleClick();
      "
      :disabled="clicked"
      class="flex justify-center items-center"
    >
      <div class="relative w-[117px]">
        <transition name="fade">
          <div class="absolute w-[117px] translate-y-[-4px]" v-if="clicked">
            <div class="flex flex-col items-center">
              <div class="w-full"></div>
              <v-progress-linear
                indeterminate
                :height="10"
                class="w-full"
              ></v-progress-linear>
            </div>
          </div>
          <div class="absolute -translate-y-2" v-else>Send Request</div>
        </transition>
      </div>
    </v-btn>
    <v-btn
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      @click="theme.toggleTheme()"
    >
      Change Theme
    </v-btn>
  </InfoCard>
</template>
