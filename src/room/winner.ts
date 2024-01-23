import perfil from "../types/account";
import positions from "../types/position";
import send from "../websocket/send";
import detectedTIE from "./tie";

var match = {
    HasWinner:false,
    symbol:"",
    tie:false
}

const WINNER = (): void => {
    // X | X | X 
    //   |   |   
    //   |   |
    if (positions.collumn1.pos1 == "X" &&
        positions.collumn1.pos2 == "X" &&
        positions.collumn1.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos1 == "O" &&
        positions.collumn1.pos2 == "O" &&
        positions.collumn1.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   |   
    // X | X | X 
    //   |   |
    if (positions.collumn2.pos1 == "X" &&
        positions.collumn2.pos2 == "X" &&
        positions.collumn2.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn2.pos1 == "O" &&
        positions.collumn2.pos2 == "O" &&
        positions.collumn2.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   |   
    //   |   |
    // X | X | X 
    if (positions.collumn3.pos1 == "X" &&
        positions.collumn3.pos2 == "X" &&
        positions.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn3.pos1 == "O" &&
        positions.collumn3.pos2 == "O" &&
        positions.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    // X |   |   
    // X |   |
    // X |   |  
    if (positions.collumn1.pos1 == "X" &&
        positions.collumn2.pos1 == "X" &&
        positions.collumn3.pos1 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos1 == "O" &&
        positions.collumn2.pos1 == "O" &&
        positions.collumn3.pos1 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   | X |   
    //   | X |
    //   | X |  
    if (positions.collumn1.pos2 == "X" &&
        positions.collumn2.pos2 == "X" &&
        positions.collumn3.pos2 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos2 == "O" &&
        positions.collumn2.pos2 == "O" &&
        positions.collumn3.pos2 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   | X  
    //   |   | X
    //   |   | X
    if (positions.collumn1.pos3 == "X" &&
        positions.collumn2.pos3 == "X" &&
        positions.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos3 == "O" &&
        positions.collumn2.pos3 == "O" &&
        positions.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    // X |   |   
    //   | X | 
    //   |   | X
    if (positions.collumn1.pos1 == "X" &&
        positions.collumn2.pos2 == "X" &&
        positions.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos1 == "O" &&
        positions.collumn2.pos2 == "O" &&
        positions.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   | X
    //   | X | 
    // X |   | 
    if (positions.collumn1.pos3 == "X" &&
        positions.collumn2.pos2 == "X" &&
        positions.collumn3.pos1 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (positions.collumn1.pos3 == "O" &&
        positions.collumn2.pos2 == "O" &&
        positions.collumn3.pos1 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    if (match.HasWinner) {
        if (perfil.getMark() == match.symbol) {
            setTimeout(() => {
                send({
                    type:"STATE",
                    msg:{
                        winner:perfil.getNickname()
                    }
                })
            },1400)
        }
    }

    detectedTIE();

    if (match.HasWinner) console.log("winner detected");
}

setInterval(() => {
    if (match.HasWinner || match.tie) return;
    WINNER();
},300);

export {match}