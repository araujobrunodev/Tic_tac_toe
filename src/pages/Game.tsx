import BarGame from "../components/barGame"
import ScoreBoard from "../components/scoreBoard"
import positions from "../types/position"
import { useStatus } from "../types/playerStatus"
import freePosition from "../room/position"
import { playersTurn } from "../room/turn"
import { Info } from "../components/alert"
import positionMarked from "../room/marked"
import activeTurn from "../types/active"
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

    useEffect(() => {
        page.setName("PLAYING")
        page.setOpenBars(true)
    },[])

    return (<>
        <ScoreBoard />        

        <BarGame
            onClick1={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","1");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn1.pos1 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("1","1", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}
            
            onClick2={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","2");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn1.pos2 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("1","2", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick3={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("1","3");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn1.pos3 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("1","3", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick4={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","1");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn2.pos1 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("2","1", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick5={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","2");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn2.pos2 = status.mark
                        UpdateBarGame.update = true;
                        positionMarked("2","2", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick6={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("2","3");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn2.pos3 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("2","3", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick7={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","1");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn3.pos1 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("3","1", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick8={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","2");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");

                        positions.collumn3.pos2 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("3","2", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}

            onClick9={() => {
                if (status.yourTurn == true) {
                    let PositionIsFree = freePosition("3","3");
                    
                    if (PositionIsFree == false) {
                        if (status.mark == "") status.setMark("X");
                        
                        positions.collumn3.pos3 = status.mark;
                        UpdateBarGame.update = true;
                        positionMarked("3","3", status.mark, opponent.uuid);
                        playersTurn("change", status.uuid, opponent.uuid);
                        activeTurn.state = true;
                    }
                }
            }}
        />

        <Info/>
        <AlertExit/>
    </>)
}

export default GamePage;