import currentBegin from "../../types/activebegin";
import callInfo from "../../types/callAlert";
import { turnType } from "../../types/turn";
import activeTurn from "../../types/active";
import currentRoom from "../../types/room";
import perfil from "../../types/account";
import { bs } from "../../types/beginS";

const TURN = (receive: turnType) => {
    activeTurn.state = false;
    bs.state = false;

    if (receive.nick == perfil.getNickname()) {
        perfil.setYourTurn(true);
        callInfo.active = true;
        callInfo.message = receive.value;

        if (receive.beginningOfTheGame == true) {
            perfil.setMark("X");
            currentRoom.opponentMark = "O";
        } else if (receive.beginningOfTheGame == false && perfil.getMark() == "") {
            perfil.setMark("O");
            currentRoom.opponentMark = "X";
        }
    } else {
        perfil.setYourTurn(false);
        callInfo.active = false;
    }

    currentBegin.state = false;
}

export default TURN;