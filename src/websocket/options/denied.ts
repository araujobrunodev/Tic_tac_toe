import updatePlaceBorder from "../../types/updatePlaceBorder";
import data_popUp from "../../types/dataPopUp";
import play from "../../types/play";

const DENIED = (receive:string) => {
    data_popUp.nick = receive;
    data_popUp.hidden = false;
    data_popUp.type = "";
    data_popUp.message = "refused your invite";

    play.playing = false;
    updatePlaceBorder.update = true;
}

export default DENIED;