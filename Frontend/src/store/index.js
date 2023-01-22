import {createStore} from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";


const store = createStore({
    state(){
        return {
            isDark: false,
        };
    },
    getters:getters,
    mutations:mutations,
})

export default store;