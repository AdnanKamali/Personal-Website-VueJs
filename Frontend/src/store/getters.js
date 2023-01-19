import {useDisplay} from "vuetify";

const getters = {
    isDesktop() {
        return useDisplay().lgAndUp.value;
    }
}
export default getters;