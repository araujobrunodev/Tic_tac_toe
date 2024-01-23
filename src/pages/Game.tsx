import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import BarGame from "../components/barGame"
import ScoreBoard from "../components/scoreBoard"
import positions from "../types/position"
import perfil from "../types/account"
import freePosition from "../room/position"
import { playersTurn } from "../room/turn"
import { Info } from "../components/alert"
import positionMarked from "../room/marked"
import RedirectClient from "../components/redirect"
import activeTurn from "../types/active"
import AlertExit from "../components/alert2"
import "../css/game.css"

export var UpdateBarGame = {
    update:false
}

const GamePage = () => {
    return (<>
        <RedirectClient/>
        <TopBar pageName="PLAYING" previousPage="/" />

        <ScoreBoard />        

        <BarGame
            onClick1={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("1","1");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn1.pos1 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("1","1");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}
            
            onClick2={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("1","2");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn1.pos2 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("1","2");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick3={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("1","3");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn1.pos3 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("1","3");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick4={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("2","1");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn2.pos1 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("2","1");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick5={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("2","2");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn2.pos2 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("2","2");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick6={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("2","3");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn2.pos3 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("2","3");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick7={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("3","1");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn3.pos1 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("3","1");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick8={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("3","2");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");

                        positions.collumn3.pos2 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("3","2");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}

            onClick9={() => {
                if (perfil.getYourTurn() == true) {
                    let PositionIsFree = freePosition("3","3");
                    
                    if (PositionIsFree == false) {
                        if (perfil.getMark() == "") perfil.setMark("X");
                        
                        positions.collumn3.pos3 = perfil.getMark();
                        UpdateBarGame.update = true;
                        positionMarked("3","3");
                        playersTurn("change");
                        activeTurn.state = true;
                    }
                }
            }}
        />

        <Info/>
        <AlertExit/>

        <BottomBar />
    </>)
}

export default GamePage;