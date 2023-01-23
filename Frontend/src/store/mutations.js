import {useDisplay} from "vuetify";

const mutations = {
    cssClassResponsive(_,payload){
        const desktop = payload[0];
        const mobile = payload[1];
        const isDesktop = useDisplay().lgAndUp.value;
        const style = {};
        style[desktop] = isDesktop
        style[mobile] = !isDesktop
        console.log(style);
        return style;
    },
    changeTheme(state){
        state.isDark = !state.isDark;
    },
    sendedMessage(state, isSended){
        state.isMessageSended = isSended;
        console.log("Yep");
        setTimeout(function (){
            state.isMessageSended = null;
            console.log(state.isMessageSended);
        }, 5000);
    }
}
export default mutations;