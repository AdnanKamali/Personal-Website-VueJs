import {useDisplay} from "vuetify";

const getters = {
    isDesktop() {
        return useDisplay().lgAndUp.value;
    },
    isDark(state){
        return state.isDark;
    },
    messageUrl(state){
        return state.baseUrl + "/message";
    }
}
export default getters;