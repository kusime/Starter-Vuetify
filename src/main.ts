import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// Vuetify
import "vuetify/styles";
import "./assets/main.css";
// Plugins
import { registerPlugins } from "@/plugins";
registerPlugins(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
