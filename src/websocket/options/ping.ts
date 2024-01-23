import perfil, { msgUUid } from "../../types/account";
import send from "../send";

const PING = (uuid:msgUUid) => {
    perfil.setAvailable(true);
    send({
        type:"PONG",
        msg: {
            uuid:perfil.getUUID()
        }
    })
}

export default PING;