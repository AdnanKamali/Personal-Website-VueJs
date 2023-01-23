export default {
    async sendMessage(context, payload) {
        // send to server
        const url = context.getters.messageUrl;
        const body = JSON.stringify(payload);
        const headers = {"Content-Type": "application/json"};
        try {

            const request = await fetch(url, {method: "POST", body: body, headers: headers});
            const result = await request.json();
            if (request.ok) {
                context.commit("sendedMessage", true);
            } else {
                context.commit("sendedMessage", false);
            }
        } catch (_) {
            context.commit("sendedMessage", false);
        } finally {

            context.state.isMessageSended = true;
            setTimeout(function () {
                context.state.isMessageSended = false;
            }, 4000);
        }
    }
}