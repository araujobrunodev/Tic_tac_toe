interface InvitePlayer {
    /** player name*/
    nick: string,
    /** player identification*/
    uuid:string,
    /** invited response*/
    value: string
}

export type invitePlayer = InvitePlayer;

/** player identification to invite */
var inviteSomeone: invitePlayer = {
    value: "",
    nick: "",
    uuid: ""
}

export default inviteSomeone;