import updatePlaceBorder from "../../types/updatePlaceBorder";
import place_border from "../../types/placeBorder";
import currentBegin from "../../types/activebegin";
import { tieProperty } from "../../types/tie";
import clearPositions from "../../room/clear";
import { playersTurn } from "../../room/turn";
import { match } from "../../room/winner";
import perfil from "../../types/account";

const TIE = (receive:tieProperty) => {
    clearPositions()
    if (match.tie) 
        place_border.ties += 1;

    match.tie = false;
    
    updatePlaceBorder.update = true;
    currentBegin.state = true;

    if (perfil.getMark() == "X") playersTurn("begin");

    perfil.setMark("");
}

export default TIE;