import { Redirect } from "../components/redirect";
import Heartbeat from "../types/heartBeat";
import perfil from "../types/account";
import send from "../websocket/send";

const connect = () => {
    let nick = perfil.getNickname();
    let NoSpace = false;
    let result = false;

    if (nick.length < 3) {
        for (let count = 0; count < nick.length; count++) {
            if (nick[count] == " ") {
                NoSpace = true;
            }
        }
    }

    if (nick.length > 3 && !NoSpace) {
        send({
            type: "CONNECT",
            msg: { player: perfil.getNickname() }
        })
        result = true;

        Heartbeat.active = true;

        Redirect.value = true;
        Redirect.to = "multiplayer";
    }

    return result;
}

export default connect;