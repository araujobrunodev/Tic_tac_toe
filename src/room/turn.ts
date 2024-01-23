import perfil from "../types/account";
import activeTurn from "../types/active";
import currentBegin from "../types/activebegin";
import callInfo from "../types/callAlert";
import currentRoom from "../types/room";
import ws from "../websocket/connect";
import send from "../websocket/send";
import "./winner";

var playerTurnIntheGame = {
    nick:""
}

function playersTurn (turn:string) {
    if (ws.readyState == ws.CLOSED) return;

    switch (turn) {
        case "begin":
            send({
                type: "TURN",
                msg: {
                    uuid: perfil.getUUID(),
                    opponent_uuid: "",
                    value: "begin"
                }
            })
            break;

        case "change":

            send({
                type: "TURN",
                msg: {
                    uuid: perfil.getUUID(),
                    opponent_uuid: currentRoom.opponent.uuid,
                    value: "change"
                }
            })
            break;
    }
}

setInterval(() => {
    if (activeTurn.state && !currentBegin.state) {
        callInfo.message = "";
        callInfo.active = true;
        perfil.setYourTurn(false);
        playersTurn("change");
    } 
},100)

export {playersTurn,playerTurnIntheGame};
