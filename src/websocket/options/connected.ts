import perfil, { msgUUid } from "../../types/account"

const CONNECTED = (receive:msgUUid) => {
    perfil.setUUID(receive);
}

export default CONNECTED;