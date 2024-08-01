const url = `ws://localhost:3000`//`wss://${"backend-ommm.onrender.com"}`;
let ws = new WebSocket(url);

function connect () {
    ws.onopen = () => {
        console.log(`connecting in ${url}`);
    }
}


export {ws, connect};