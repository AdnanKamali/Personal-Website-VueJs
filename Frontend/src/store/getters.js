import {useDisplay} from "vuetify";

const getters = {
    isDesktop() {
        return useDisplay().lgAndUp.value;
    },
    isDark(state) {
        return state.isDark;
    },
    messageUrl(state) {
        return state.baseUrl + "/contact";
    },
    isMessageSended(state) {
        return state.isMessageSended;
    },
    isMessageSuccess(state) {
        return state.isMessageSuccsecc
    }
}
export default getters;