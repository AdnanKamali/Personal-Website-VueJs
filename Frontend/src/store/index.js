import {createStore} from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";


const store = createStore({
    state() {
        return {
            isDark: JSON.parse(localStorage.getItem("isDark")) ?? true,
            baseUrl: "http://127.0.0.1:5000",
            isMessageSended: false,
            isMessageSuccsecc: false,
        };
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
})

export default store;