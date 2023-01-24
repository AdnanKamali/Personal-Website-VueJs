const mutations = {
    changeTheme(state) {
        state.isDark = !state.isDark;
        localStorage.setItem("isDark", state.isDark);
    },
    sendedMessage(state, isSuccess) {
        state.isMessageSuccsecc = isSuccess;
        setTimeout(function () {
            state.isMessageSuccsecc = null;
        }, 5000);
    }
}
export default mutations;