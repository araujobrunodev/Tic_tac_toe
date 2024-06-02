import encode from "./tools/encode";
import {ws} from "./connect";

const send = (data:object) => {
    let encodeData = encode(data);

    if (ws.readyState == ws.CLOSED) return;
    
    ws.send(encodeData);
}

export default send;