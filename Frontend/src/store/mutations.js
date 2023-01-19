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
    }
}
export default mutations;