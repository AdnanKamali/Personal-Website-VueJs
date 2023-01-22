import {useDisplay} from "vuetify";

const getters = {
    isDesktop() {
        return useDisplay().lgAndUp.value;
    },
    isDark(state){
        return state.isDark;
    }
}
export default getters;