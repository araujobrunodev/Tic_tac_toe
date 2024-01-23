import { FC, useEffect, useReducer, useState } from "react";
import positions from "../types/position";
import { UpdateBarGame } from "../pages/Game";
import "../css/game.css";

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
    var [pos, setPos] = useState(positions);
    var [, forceUpdate] = useReducer(y => y + 1, 0);

    useEffect(() => {
        let time = setInterval(() => {
            if (!UpdateBarGame.update) return;

            UpdateBarGame.update = false;
            setPos(positions);
            forceUpdate();
        },500)

        return () => clearInterval(time);
    })

    return (<>
        <div className="container">
            <div className="coll">
                <div
                    id="col1"
                    onClick={() => prop.onClick1()}
                    className="cubo">
                    {pos.collumn1.pos1}
                </div>

                <div
                    id="col2"
                    onClick={() => prop.onClick2()}
                    className="cubo">
                    {pos.collumn1.pos2}
                </div>

                <div
                    id="col3"
                    onClick={() => prop.onClick3()}
                    className="cubo">
                    {pos.collumn1.pos3}
                </div>
            </div>
            <div className="coll">
                <div
                    id="col4"
                    onClick={() => prop.onClick4()}
                    className="cubo">
                    {pos.collumn2.pos1}
                </div>

                <div
                    id="col5"
                    onClick={() => prop.onClick5()}
                    className="cubo">
                    {pos.collumn2.pos2}
                </div>

                <div
                    id="col6"
                    onClick={() => prop.onClick6()}
                    className="cubo">
                    {pos.collumn2.pos3}
                </div>
            </div>
            <div className="coll">
                <div
                    id="col7"
                    onClick={() => prop.onClick7()}
                    className="cubo">
                    {pos.collumn3.pos1}
                </div>

                <div
                    id="col8"
                    onClick={() => prop.onClick8()}
                    className="cubo">
                    {pos.collumn3.pos2}
                </div>

                <div
                    id="col9"
                    onClick={() => prop.onClick9()}
                    className="cubo">
                    {pos.collumn3.pos3}
                </div>
            </div>
        </div>
    </>)
}

export default BarGame;