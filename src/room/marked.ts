import perfil from "../types/account";
import currentRoom from "../types/room";
import send from "../websocket/send";

function positionMarked (collumn:string,position:string) {
    send({
        type:"MARKED",
        msg:{
            collumn:collumn,
            position:position,
            mark:perfil.getMark(),
            opponent_uuid:currentRoom.opponent.uuid
        }
    })
}

export default positionMarked;