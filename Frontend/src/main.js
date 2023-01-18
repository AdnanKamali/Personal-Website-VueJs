import { createApp } from "vue";

import App from "./App.vue";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/components";
import "vuetify/styles";
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md'

const app = createApp(App);
const vuetify = createVuetify({
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
  components,
  directives,
});

app.use(vuetify);

app.mount("#app");
