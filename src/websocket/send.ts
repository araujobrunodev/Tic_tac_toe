import encode from "./tools/encode";
import ws from "./connect";
import receive from "./receive";

const send = (data:object) => {
    let encodeData = encode(data);

    if (ws.readyState == ws.CLOSED) return;
    
    ws.send(encodeData);
}

receive();

export default send;