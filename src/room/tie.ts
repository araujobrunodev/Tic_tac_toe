// import positions from "../types/position"
import send from "../websocket/send";
import { pos } from "./position";

const detectedTIE = (position: pos) => {
    let result = false

    if ((position.collumn1.pos1.length != 0 && position.collumn1.pos2.length != 0 && position.collumn1.pos3.length != 0) &&
        (position.collumn2.pos1.length != 0 && position.collumn2.pos2.length != 0 && position.collumn2.pos3.length != 0) && 
        (position.collumn3.pos1.length != 0 && position.collumn3.pos2.length != 0 && position.collumn3.pos3.length != 0)) {
            result = true;
    }

    if (result) {
        setTimeout(() => {
            send({
                type:"TIE",
                msg:{
                    value:"not winner, not loser, only tie "
                }
            })
        },1400)
    }

    return result
}

export default detectedTIE;