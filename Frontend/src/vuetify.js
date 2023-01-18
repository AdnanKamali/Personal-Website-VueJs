import "material-design-icons-iconfont/dist/material-design-icons.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/components";
import "vuetify/styles";
import { aliases, md } from "vuetify/iconsets/md";
const vuetify = createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  components,
  directives,
});
export default vuetify;
