import place_border from "../../types/placeBorder";
import { currentExit } from "../../types/msgExit";
import { exitProperty } from "../../types/exit";
import clearPositions from "../../room/clear";
import callInfo from "../../types/callAlert";
import currentRoom from "../../types/room";
import perfil from "../../types/account";

function EXIT (receive:exitProperty) {
    perfil.setMark("");
    perfil.setYourTurn(false);

    currentRoom.opponent.nick = "";
    currentRoom.opponent.uuid = "";

    place_border.opponnet = 0;
    place_border.ties = 0;
    place_border.you = 0;
    
    currentExit.msg = `${receive.nick} ${receive.value}`;
    currentExit.state = true;
    currentExit.update = true;
    callInfo.active = false;
    
    setTimeout(() => {
        currentExit.state = false;
        currentExit.update = true;
    },1000 * 10)
    
    clearPositions();
}

export default EXIT;