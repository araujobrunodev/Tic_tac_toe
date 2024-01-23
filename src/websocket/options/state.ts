import updatePlaceBorder from "../../types/updatePlaceBorder";
import place_border from "../../types/placeBorder";
import currentBegin from "../../types/activebegin";
import { stateProperty } from "../../types/state";
import clearPositions from "../../room/clear";
import { playersTurn } from "../../room/turn";
import { match } from "../../room/winner";
import perfil from "../../types/account";

const STATE = (receive:stateProperty) => {
    clearPositions();
    match.symbol = "";
    match.HasWinner = false;
    updatePlaceBorder.update = true;
    currentBegin.state = true;

    if (perfil.getNickname() == receive.winner) { 
        place_border.you += 1;
        perfil.setMark("");
        playersTurn("begin");
    }
    if (perfil.getNickname() == receive.loser) {
        place_border.opponnet += 1;
        perfil.setMark("");
    }

}

export default STATE;