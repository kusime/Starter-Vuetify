<script setup lang="ts">
import { RouterView } from "vue-router";
import { themeState } from "@/stores/themeState";
import { storeToRefs } from "pinia";
const theme = themeState();
const { currentTheme } = storeToRefs(theme);
</script>
<template>
  <v-app :theme="currentTheme">
    <div class="fixed top-0 left-0 right-0 shadow-xl">
      <v-footer>
        <nav class="py-6 text-2xl text-center self-center w-full">
          Simple Vuetify with Tailwind Starter
        </nav>
      </v-footer>
    </div>
    <v-layout class="flex justify-center items-center">
      <RouterView />
    </v-layout>

    <div class="fixed bottom-0 left-0 right-0 shadow-2xl shadow-black">
      <v-footer>
        <nav class="py-6 text-2xl text-center self-center w-full">
          Recommend Editor : Webstorm
        </nav>
      </v-footer>
    </div>
  </v-app>
</template>
