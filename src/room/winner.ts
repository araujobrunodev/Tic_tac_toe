import send from "../websocket/send";
import detectedTIE from "./tie";
import { pos } from "./position";

var match = {
    HasWinner:false,
    symbol:"",
    tie:false
}

const WINNER = (mark: string, nick: string, position: pos): void => {
    // X | X | X 
    //   |   |   
    //   |   |
    if (position.collumn1.pos1 == "X" &&
        position.collumn1.pos2 == "X" &&
        position.collumn1.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn1.pos2 == "O" &&
        position.collumn1.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   |   
    // X | X | X 
    //   |   |
    if (position.collumn2.pos1 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn2.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn2.pos1 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn2.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   |   
    //   |   |
    // X | X | X 
    if (position.collumn3.pos1 == "X" &&
        position.collumn3.pos2 == "X" &&
        position.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn3.pos1 == "O" &&
        position.collumn3.pos2 == "O" &&
        position.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    // X |   |   
    // X |   |
    // X |   |  
    if (position.collumn1.pos1 == "X" &&
        position.collumn2.pos1 == "X" &&
        position.collumn3.pos1 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn2.pos1 == "O" &&
        position.collumn3.pos1 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   | X |   
    //   | X |
    //   | X |  
    if (position.collumn1.pos2 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos2 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos2 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos2 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   | X  
    //   |   | X
    //   |   | X
    if (position.collumn1.pos3 == "X" &&
        position.collumn2.pos3 == "X" &&
        position.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos3 == "O" &&
        position.collumn2.pos3 == "O" &&
        position.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    // X |   |   
    //   | X | 
    //   |   | X
    if (position.collumn1.pos1 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos3 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos3 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    //   |   | X
    //   | X | 
    // X |   | 
    if (position.collumn1.pos3 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos1 == "X") {
            match.HasWinner = true;
            match.symbol = "X";
    }
    if (position.collumn1.pos3 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos1 == "O") {
            match.HasWinner = true;
            match.symbol = "O";
    }

    if (match.HasWinner) {
        if (mark == match.symbol) {
            setTimeout(() => {
                send({
                    type:"STATE",
                    msg:{
                        winner: nick
                    }
                })
            },1400)
        }
    }

    detectedTIE(position);

    if (match.HasWinner) console.log("winner detected");
}

// setInterval(() => {
//     if (match.HasWinner || match.tie) return;
//     // WINNER();
// },300);

export {match}