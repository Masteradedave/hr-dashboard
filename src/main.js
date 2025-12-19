import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faLock,
  faCheck,
  faAngleLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faLock,
  faGoogle,
  faFacebook,
  faCheck,
  faAngleLeft,
  faEye,
  faEyeSlash
);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
