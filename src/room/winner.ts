import send from "../websocket/send";
import { pos } from "./position";

const WINNER = (mark: string, nick: string, position: pos): boolean => {
    let winner = false
    let symbol = ""

    // X | X | X 
    //   |   |   
    //   |   |
    if (position.collumn1.pos1 == "X" &&
        position.collumn1.pos2 == "X" &&
        position.collumn1.pos3 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn1.pos2 == "O" &&
        position.collumn1.pos3 == "O") {
            winner = true;
            symbol = "O";
    }

    //   |   |   
    // X | X | X 
    //   |   |
    if (position.collumn2.pos1 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn2.pos3 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn2.pos1 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn2.pos3 == "O") {
            winner = true;
            symbol = "O";
    }

    //   |   |   
    //   |   |
    // X | X | X 
    if (position.collumn3.pos1 == "X" &&
        position.collumn3.pos2 == "X" &&
        position.collumn3.pos3 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn3.pos1 == "O" &&
        position.collumn3.pos2 == "O" &&
        position.collumn3.pos3 == "O") {
            winner = true;
            symbol = "O";
    }

    // X |   |   
    // X |   |
    // X |   |  
    if (position.collumn1.pos1 == "X" &&
        position.collumn2.pos1 == "X" &&
        position.collumn3.pos1 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn2.pos1 == "O" &&
        position.collumn3.pos1 == "O") {
            winner = true;
            symbol = "O";
    }

    //   | X |   
    //   | X |
    //   | X |  
    if (position.collumn1.pos2 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos2 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos2 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos2 == "O") {
            winner = true;
            symbol = "O";
    }

    //   |   | X  
    //   |   | X
    //   |   | X
    if (position.collumn1.pos3 == "X" &&
        position.collumn2.pos3 == "X" &&
        position.collumn3.pos3 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos3 == "O" &&
        position.collumn2.pos3 == "O" &&
        position.collumn3.pos3 == "O") {
            winner = true;
            symbol = "O";
    }

    // X |   |   
    //   | X | 
    //   |   | X
    if (position.collumn1.pos1 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos3 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos1 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos3 == "O") {
            winner = true;
            symbol = "O";
    }

    //   |   | X
    //   | X | 
    // X |   | 
    if (position.collumn1.pos3 == "X" &&
        position.collumn2.pos2 == "X" &&
        position.collumn3.pos1 == "X") {
            winner = true;
            symbol = "X";
    }
    if (position.collumn1.pos3 == "O" &&
        position.collumn2.pos2 == "O" &&
        position.collumn3.pos1 == "O") {
            winner = true;
            symbol = "O";
    }

    if (winner) {
        if (mark == symbol) {
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

    if (winner) console.log("winner detected");
    return winner
}

export default WINNER