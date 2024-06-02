import { Redirect } from "../components/redirect";
import Heartbeat from "../types/heartBeat";
import send from "../websocket/send";

const connect = (nickName: string) => {
    let nick = nickName;
    let NoSpace = false;
    let result = false;

    if (nick.length < 3) {
        for (let count = 0; count < nick.length; count++) {
            if (nick[count] == " ") {
                NoSpace = true;
            }
        }
    }

    if (nick.length > 3 && nick.length < 8 && !NoSpace) {
        send({
            type: "CONNECT",
            msg: { player: nick}
        })
        result = true;

        Heartbeat.active = true;

        Redirect.value = true;
        Redirect.to = "multiplayer";
    }

    return result;
}

export default connect;