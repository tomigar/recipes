import { createApp, App as Application } from "vue";
import router from "./router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "@/index.css";

import Button from "primevue/button";

const pinia = createPinia();

const app: Application = createApp(App);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(pinia);

app.component("Button", Button);
app.mount("#app");
