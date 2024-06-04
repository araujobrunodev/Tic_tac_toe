// import positions from "../types/position"
import send from "../websocket/send";
import { match } from "./winner"
import { pos } from "./position";

const detectedTIE = (position: pos) => {
    if (match.HasWinner) return;

    if ((position.collumn1.pos1 != "" && position.collumn1.pos2 != "" && position.collumn1.pos3 != "") &&
        (position.collumn2.pos1 != "" && position.collumn2.pos2 != "" && position.collumn2.pos3 != "") && 
        (position.collumn3.pos1 != "" && position.collumn3.pos2 != "" && position.collumn3.pos3 != "")) {
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