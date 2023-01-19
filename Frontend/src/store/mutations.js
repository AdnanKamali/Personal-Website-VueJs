const mutations = {
    cssClassResponsive(state,payload){

        return {desktop:this.isDesktop, mobile:!this.isDesktop};
    }
}
export default mutations;