import BarGame from "../components/barGame"
import ScoreBoard from "../components/scoreBoard"
import { usePosition } from "../types/position"
import { useStatus } from "../types/playerStatus"
import freePosition from "../room/position"
import { Info } from "../components/alert"
import positionMarked from "../room/marked"
import { useTurn } from "../types/active"
import AlertExit from "../components/alert2"
import { useEffect } from "react";
import { usePage } from "../types/page";
import "../css/game.css"
import { useOpponent } from "../types/room"

export var UpdateBarGame = {
    update:false
}

const GamePage = () => {
    let page = usePage()
    let status = useStatus()
    let opponent = useOpponent()
    let turn = useTurn()
    let position = usePosition()

    useEffect(() => {
        page.setName("PLAYING")
        page.setOpenBars(true)
    },[])

    return (<>
        <ScoreBoard />        

        <BarGame
            onClick1={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","1", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn1({pos1: status.mark, pos2: position.collumn1.pos2, pos3: position.collumn1.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("1","1", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}
            
            onClick2={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","2", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn1({pos1: position.collumn1.pos1, pos2: status.mark, pos3: position.collumn1.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("1","2", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick3={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","3", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn1({pos1: position.collumn1.pos1, pos2: position.collumn1.pos2, pos3: status.mark});
                        UpdateBarGame.update = true;
                        positionMarked("1","3", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick4={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","1", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn2({pos1: status.mark, pos2: position.collumn2.pos2, pos3: position.collumn2.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("2","1", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick5={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","2", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn2({pos1: position.collumn2.pos1, pos2: status.mark, pos3: position.collumn2.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("2","2", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick6={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","3", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn2({pos1: position.collumn2.pos1, pos2: position.collumn2.pos2, pos3: status.mark});
                        UpdateBarGame.update = true;
                        positionMarked("2","3", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick7={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","1", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn3({pos1: status.mark, pos2: position.collumn3.pos2, pos3: position.collumn3.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("3","1", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick8={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","2", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        position.setCollumn3({pos1: position.collumn3.pos1, pos2: status.mark, pos3: position.collumn3.pos3});
                        UpdateBarGame.update = true;
                        positionMarked("3","2", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}

            onClick9={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","3", position);
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");
                        
                        position.setCollumn3({pos1: position.collumn3.pos1, pos2: position.collumn3.pos2, pos3: status.mark});
                        UpdateBarGame.update = true;
                        positionMarked("3","3", status.mark, opponent.uuid);
                        turn.setState(turn.state = true);
                    }
                }
            }}
        />

        <Info/>
        <AlertExit/>
    </>)
}

export default GamePage;