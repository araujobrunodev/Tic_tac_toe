import positions from "../types/position"
import send from "../websocket/send";
import { match } from "./winner"

const detectedTIE = () => {
    if (match.HasWinner) return;

    if ((positions.collumn1.pos1 != "" && positions.collumn1.pos2 != "" && positions.collumn1.pos3 != "") &&
        (positions.collumn2.pos1 != "" && positions.collumn2.pos2 != "" && positions.collumn2.pos3 != "") && 
        (positions.collumn3.pos1 != "" && positions.collumn3.pos2 != "" && positions.collumn3.pos3 != "")) {
            match.tie = true;
    }

    if (match.tie) {
        setTimeout(() => {
            send({
                type:"TIE",
                msg:{
                    value:"not winner, not loser, only tie "
                }
            })
        },1400)
    }

    if (match.tie) console.log("detected tie");
}

export default detectedTIE;