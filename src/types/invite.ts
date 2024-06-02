import { createContext, useContext } from "react";

interface InvitePlayer {
    /** player name*/
    nick: string,
    /** player identification*/
    uuid:string,
    /** invited response*/
    value: string,
    setNick: (a: string) => void,
    setUuid: (f: string) => void,
    setValue: (g: string) => void
}

export type invitePlayer = InvitePlayer;

/** player identification to invite */
var inviteSomeone: invitePlayer = {
    value: "",
    nick: "",
    uuid: "",
    setNick: () => {},
    setUuid: () => {},
    setValue: () => {}
}

const CreateInvite = createContext({} as InvitePlayer)
const useInvite = () => useContext(CreateInvite)

export default inviteSomeone;
export { CreateInvite, useInvite }