import { FC, useEffect, useReducer, useState } from "react";
import { usePosition } from "../types/position";
import "../css/game.css";
import { useTurn } from "../types/active";
import { useStatus } from "../types/playerStatus";
import { useInfo } from "../types/callAlert";
import { playersTurn } from "../room/turn";
import { useBegin } from "../types/activebegin";
import { useOpponent } from "../types/room";
import { match } from "../room/winner";

interface BarGameProps {
    /** callback of column one position 1*/
    onClick1: () => void,
    /** callback of column one position 2*/
    onClick2: () => void,
    /** callback of column one position 3*/
    onClick3: () => void,

    /** callback of column two position 1*/
    onClick4: () => void,
    /** callback of column two position 2*/
    onClick5: () => void,
    /** callback of column two position 3*/
    onClick6: () => void,

    /** callback of column three position 1*/
    onClick7: () => void,
    /** callback of column three position 2*/
    onClick8: () => void,
    /** callback of column three position 3*/
    onClick9: () => void,
}

const BarGame: FC<BarGameProps> = (prop) => {
    let turn = useTurn()
    let status = useStatus()
    let info = useInfo()
    let begin = useBegin()
    let opponent = useOpponent()
    let position = usePosition()

    // useEffect(() => {
    //     let time = setInterval(() => {
    //         if (!UpdateBarGame.update) return;

    //         UpdateBarGame.update = false;
    //         setPos(positions);
    //         forceUpdate();
    //     },500)

    //     return () => clearInterval(time);
    // })

    useEffect(() => {
        if (turn.state && !begin.state) {
            console.log("info:",info,"\n turn:", turn)
            info.setMessage(info.message = "");
            info.setActive(info.active = true);
            status.setYourTurn(status.yourTurn = false);
            playersTurn("change", status.uuid, opponent.uuid);
        }
    },[turn])

    // useEffect(() => {
    //     setInterval(() => {
    //         if (match.HasWinner || match.tie) return;
    //         // WINNER();
    //         console.log("winner detected")
    //     },300);
    // },[match])
    
    return (<>
        <div className="container">
            <div className="coll">
                <div
                    id="col1"
                    onClick={() => prop.onClick1()}
                    className="cubo">
                    {position.collumn1.pos1}
                </div>

                <div
                    id="col2"
                    onClick={() => prop.onClick2()}
                    className="cubo">
                    {position.collumn1.pos2}
                </div>

                <div
                    id="col3"
                    onClick={() => prop.onClick3()}
                    className="cubo">
                    {position.collumn1.pos3}
                </div>
            </div>
            <div className="coll">
                <div
                    id="col4"
                    onClick={() => prop.onClick4()}
                    className="cubo">
                    {position.collumn2.pos1}
                </div>

                <div
                    id="col5"
                    onClick={() => prop.onClick5()}
                    className="cubo">
                    {position.collumn2.pos2}
                </div>

                <div
                    id="col6"
                    onClick={() => prop.onClick6()}
                    className="cubo">
                    {position.collumn2.pos3}
                </div>
            </div>
            <div className="coll">
                <div
                    id="col7"
                    onClick={() => prop.onClick7()}
                    className="cubo">
                    {position.collumn3.pos1}
                </div>

                <div
                    id="col8"
                    onClick={() => prop.onClick8()}
                    className="cubo">
                    {position.collumn3.pos2}
                </div>

                <div
                    id="col9"
                    onClick={() => prop.onClick9()}
                    className="cubo">
                    {position.collumn3.pos3}
                </div>
            </div>
        </div>
    </>)
}

export default BarGame;