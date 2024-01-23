import ws from "./connect";
import decode from "./tools/decode";
import mensagens from "./mensagens";
import { receiverProperty } from "../types/receive";

const receive = () => {
  if (ws.readyState == ws.CLOSED) return;
  
  ws.addEventListener("message", (receivedata:any) => {
    let decodeData = decode(receivedata.data as string) as receiverProperty;
    mensagens(decodeData)
  })
}

export default receive;