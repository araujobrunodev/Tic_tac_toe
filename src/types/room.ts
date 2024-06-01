import { createContext, useContext } from "react";
import { playerType } from "./player"

interface Room {
    /** name of the opponent*/
    opponent:playerType,
    /** opponent mark*/
    opponentMark:string
}

interface Opponent {
    uuid: string,
    nick: string,
    mark: string,
    setUuid: (a: string) => void,
    setNick: (l: string) => void,
    setMark: (g: string) => void
}

const CreateOpponent = createContext({} as Opponent)
const useOpponent = () => useContext(CreateOpponent)

export { CreateOpponent, useOpponent }

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