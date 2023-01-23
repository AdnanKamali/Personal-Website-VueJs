import { createApp } from "vue";

import App from "./App.vue";
import vuetify from "./vuetify.js";
import store from "./store/index";
import {MotionPlugin} from "@vueuse/motion";




const app = createApp(App);


app.use(vuetify);
app.use(MotionPlugin);
app.use(store);

app.mount("#app");
