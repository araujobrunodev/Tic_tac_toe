import activeTurn from "../types/active";
import currentBegin from "../types/activebegin";
import {ws} from "../websocket/connect";
import send from "../websocket/send";
import "./winner";

function playersTurn (turn:string, uuid: string, opponentUuid: string) {
    if (ws.readyState == ws.CLOSED) return;

    switch (turn) {
        case "begin":
            send({
                type: "TURN",
                msg: {
                    uuid: uuid,
                    opponent_uuid: opponentUuid,
                    value: "begin"
                }
            })
            break;

        case "change":
            send({
                type: "TURN",
                msg: {
                    uuid: uuid,
                    opponent_uuid: opponentUuid,
                    value: "change"
                }
            })
            break;
    }
}

setInterval(() => {
    // if (activeTurn.state && !currentBegin.state) {
        // callInfo.message = "";
        // callInfo.active = true;
        // perfil.setYourTurn(false);
        // playersTurn("change");
    // } 
},100)

export { playersTurn };
