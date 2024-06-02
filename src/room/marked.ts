import send from "../websocket/send";

function positionMarked (collumn:string,position:string, mark: string, opponentUuid: string) {
    send({
        type:"MARKED",
        msg:{
            collumn:collumn,
            position:position,
            mark: mark,
            opponent_uuid: opponentUuid
        }
    })
}

export default positionMarked;