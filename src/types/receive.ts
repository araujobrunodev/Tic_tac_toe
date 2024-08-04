import { msgUUid } from "./account";
import { turnType } from "./turn";
import { invitePlayer } from "./invite";
import { markedType } from "./mark";
import { stateProperty } from "./state";
import { tieProperty } from "./tie";
import { exitProperty } from "./exit";
import { available } from "./availables"

interface ReceiverProperty {
    /** type of response*/
    type: string,
    /** response value*/
    msg: string | 
        msgUUid | 
        invitePlayer | 
        turnType | 
        markedType | 
        stateProperty | 
        tieProperty | 
        exitProperty |
        available[]
}

export type receiverProperty = ReceiverProperty;