import updatePlaceBorder from "../../types/updatePlaceBorder"
import { Redirect } from "../../components/redirect"
import { playerType } from "../../types/player"
import { playersTurn } from "../../room/turn"
import currentRoom from "../../types/room"
import { bs } from "../../types/beginS"
import play from "../../types/play"

const ACCEPTED = (receive: playerType) => {
    currentRoom.opponent = receive;
    Redirect.value = true;
    Redirect.to = "playing";
    bs.state = true;
    
    play.playing = true;
    updatePlaceBorder.update = true;
    
    setInterval(() => {
        if (bs.state) playersTurn("begin");
    },1000 * 10)
}

export default ACCEPTED;