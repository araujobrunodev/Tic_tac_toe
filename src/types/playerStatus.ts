import { createContext, useContext } from "react";

interface PlayerStatus {
    uuid: string,
    nick: string,
    available: boolean,
    mark: string,
    yourTurn: boolean,
    setUuid: (a: string) => void,
    setNick: (d: string) => void,
    setAvailable: (g: boolean) => void,
    setMark: (t: string)=> void,
    setYourTurn: (l: boolean) => void,
}

const CreateStatus = createContext({} as PlayerStatus)
const useStatus = () => useContext(CreateStatus)

export {CreateStatus, useStatus}