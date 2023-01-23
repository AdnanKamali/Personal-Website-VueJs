import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/components";
import "vuetify/styles";

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#fafafa',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        }
    },
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

// export default vuetify;
