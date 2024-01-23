import { playerType } from "./player"

interface Room {
    /** name of the opponent*/
    opponent:playerType,
    /** opponent mark*/
    opponentMark:string
}

type room = Room;

/** current room you are in */
var currentRoom:room = {
    opponent:{
        nick:"",
        uuid:""
    },
    opponentMark:""
}

export default currentRoom;