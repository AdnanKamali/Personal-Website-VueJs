import {createStore} from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";


const store = createStore({
    state(){
        return {
            isDark: true,
            baseUrl: "http://127.0.0.1:5000",
            isMessageSended: null,
        };
    },
    getters:getters,
    mutations:mutations,
    actions:actions,
})

export default store;