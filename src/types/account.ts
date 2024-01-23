interface MsgUUID {
    /** your identification*/
    uuid: string
}

export type msgUUid = MsgUUID; 

/** player data*/
class perfil {
    private static nick = "";
    private static uuid = "";
    private static available = false;
    private static yourTurn = false;
    private static X_or_O = "";

    /** set player nickname */
    static setNickname = (nick:string) => {
        perfil.nick = nick;
    }

    /** set your marker*/
    static setMark = (value:string) => {
        perfil.X_or_O = value;
    }

    /** set uuid */
    static setUUID = (msg:msgUUid) => {
        perfil.uuid = msg.uuid;
    }

    /** set available*/
    static setAvailable = (msg:boolean) => {
        perfil.available = msg;
    }

    /** set your turn*/
    static setYourTurn = (msg:boolean) => {
        perfil.yourTurn = msg;
    }


    /** get your nickname*/
    static getNickname = () => {
        return perfil.nick;
    }

    /** get your marker*/
    static getMark = () => {
        return perfil.X_or_O;
    }

    static getAvailable = () => {
        return perfil.available;
    }

    /** get your player identification */
    static getUUID = () => {
        return perfil.uuid;
    }

    /** get your turn*/
    static getYourTurn = () => {
        return perfil.yourTurn;
    }
}

export default perfil;