import ws from "./connect";

type DISCONNECTION = {
    url: string,
    state: boolean
}

let disconnection:DISCONNECTION = {
    state: false,
    url: ""
}

function detectDisconnection () {
    if (ws.readyState == 3) {
        console.log("lost connection")
        disconnection.state = true
        disconnection.url = ws.url
    } else {
        disconnection.state = false
        disconnection.url = ""
    }
}

export {detectDisconnection, disconnection}