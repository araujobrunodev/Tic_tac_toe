import ws from "./connect";

function detectDisconnection () {
    let infoNetwork = {
        url: "",
        state: false
    }

    if (ws.readyState == 3) {
        console.log("lost connection")
        infoNetwork.state = true
        infoNetwork.url = ws.url
    }

    return infoNetwork
}

export {detectDisconnection}