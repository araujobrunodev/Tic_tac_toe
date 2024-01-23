interface Turn {
    /** player name*/
    nick:string,
    /** message */
    value:string,
    /** beginning of the game */
    beginningOfTheGame:boolean
}

export type turnType = Turn; 