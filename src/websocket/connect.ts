const url = `wss://${"backend-ommm.onrender.com"}`;
let ws = new WebSocket(url);

function connectOrReconnect (reconnect: boolean = false) {
    switch (reconnect) {
        case false:
            ws.onopen = () => {
                console.log(`connecting in ${url}`);
            }
            break;

        case true:
            ws = new WebSocket(url)

            ws.onopen = () => {
                console.log(`reconnecting in ${url}`);
            }
            break;
    }
}


export {ws, connectOrReconnect};