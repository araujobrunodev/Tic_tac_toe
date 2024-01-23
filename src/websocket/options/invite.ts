import { Redirect } from "../../components/redirect";
import { invitePlayer } from "../../types/invite";
import data_popUp from "../../types/dataPopUp";
import inviteSomeone from "../../types/invite";

const INVITE = (receive: invitePlayer) => {
    inviteSomeone.nick = receive.nick;
    inviteSomeone.uuid = receive.uuid;
    
    data_popUp.nick = inviteSomeone.nick;
    data_popUp.hidden = false;
    data_popUp.type = "invite";
    data_popUp.message = receive.value;
    data_popUp.id = inviteSomeone.uuid;
    
    Redirect.value = true;
    if (location.pathname != "/multiplayer")
        Redirect.to = "multiplayer";
    else 
        Redirect.to = "invite";
}

export default INVITE;