import { createApp } from "vue";
import { Router } from "./router";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./plugins/fontAwesome";

const app = createApp(App);

app.use(Router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
