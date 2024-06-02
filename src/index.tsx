import router from "./router"
import { RouterProvider } from "react-router-dom"
import { ws } from "./websocket/connect"
import { useEffect, useState } from "react"
import { receiverProperty } from "./types/receive"
import decode from "./websocket/tools/decode"
import { useStatus } from "./types/playerStatus"
import { msgUUid } from "./types/account"
import { invitePlayer, useInvite } from "./types/invite"
import { useDataPopUp } from "./types/dataPopUp"
import { Redirect } from "./components/redirect"
import play from "./types/play"
import updatePlaceBorder from "./types/updatePlaceBorder"
import { useOpponent } from "./types/room"
import { playerType } from "./types/player"
import { bs } from "./types/beginS"
import { playersTurn } from "./room/turn"
import send from "./websocket/send"
import { turnType } from "./types/turn"
import { useInfo } from "./types/callAlert"
import activeTurn from "./types/active"
import currentBegin from "./types/activebegin"
import { markedType } from "./types/mark"
import { stateProperty } from "./types/state"
import { usePlaceBorder } from "./types/placeBorder"
import { match } from "./room/winner"
import clearPositions from "./room/clear"
import { useExit } from "./types/msgExit"
import { exitProperty } from "./types/exit"
import positionReserved from "./room/positionReserved"

const Index = () => {
    let [property, setProperty] = useState({} as receiverProperty)
    let status = useStatus()
    let invite = useInvite()
    let dataPopUp = useDataPopUp()
    let opponent = useOpponent()
    let info = useInfo()
    let placeBorder = usePlaceBorder()
    let exit = useExit()

    useEffect(() => {
        if (ws.readyState == ws.OPEN) {
            ws.addEventListener("message", (receivedata) => {
                let decodeData = decode(receivedata.data as string) as receiverProperty;
                setProperty(decodeData)
            })
        }
    })

    useEffect(() => {
        switch (property.type) {
            case "CONNECTED":
                let uuid = (property.msg as msgUUid).uuid
                status.setUuid(uuid)
                break;

            case "INVITE":
                let inviteByPlayer = property.msg as invitePlayer
                invite.nick = inviteByPlayer.nick;
                invite.uuid = inviteByPlayer.uuid;

                dataPopUp.nick = invite.nick;
                dataPopUp.hidden = false;
                dataPopUp.type = "invite";
                dataPopUp.message = inviteByPlayer.value;
                dataPopUp.id = invite.uuid;

                Redirect.value = true;
                if (location.pathname != "/multiplayer")
                    Redirect.to = "multiplayer";
                else 
                    Redirect.to = "invite";
                console.log("invited", property)
                break;

            case "DENIED":
                dataPopUp.nick = property.msg as string;
                dataPopUp.hidden = false;
                dataPopUp.type = "";
                dataPopUp.message = "refused your invite";

                play.playing = false;
                updatePlaceBorder.update = true;
                break;

            case "ACCEPTED":
                let receiveAccepeted = property.msg as playerType
                opponent.nick = receiveAccepeted.nick
                opponent.uuid = receiveAccepeted.uuid
                Redirect.value = true;
                Redirect.to = "playing";
                bs.state = true;

                play.playing = true;
                updatePlaceBorder.update = true;

                setInterval(() => {
                    if (bs.state) playersTurn("begin", status.mark, opponent.uuid);
                },1000 * 10)
                break;

            case "PING":
                status.setAvailable(true);
                send({
                    type:"PONG",
                    msg: {
                        uuid: status.uuid
                    }
                })
                break;

            case "TURN":
                let receiveTurn = property.msg as turnType
                activeTurn.state = false;
                bs.state = false;

                if (receiveTurn.nick == status.nick) {
                    status.setYourTurn(true);
                    info.active = true;
                    info.message = receiveTurn.value;
                
                    if (receiveTurn.beginningOfTheGame == true) {
                        status.setMark("X");
                        opponent.setMark("O");
                    } else if (receiveTurn.beginningOfTheGame == false && status.mark == "") {
                        status.setMark("O");
                        opponent.setMark("X");
                    }
                } else {
                    status.setYourTurn(false);
                    info.active = false;
                }
            
                currentBegin.state = false;
                break;

            case "MARKED":
                let value = property.msg as markedType
                positionReserved(value.collumn, value.position, value.mark, status.mark);
                break;

            case "STATE":
                let receiveState = property.msg as stateProperty
                clearPositions();
                match.symbol = "";
                match.HasWinner = false;
                updatePlaceBorder.update = true;
                currentBegin.state = true;

                if (status.nick == receiveState.winner) { 
                    placeBorder.setYou(++placeBorder.you);
                    status.setMark("");
                    playersTurn("begin", status.mark, opponent.uuid);
                }
                if (status.nick == receiveState.loser) {
                    placeBorder.setOpponent(++placeBorder.opponnet);
                    status.setMark("");
                }
                break;

            case "TIE":
                clearPositions()
                if (match.tie) 
                    placeBorder.setTies(++placeBorder.ties);
            
                match.tie = false;

                updatePlaceBorder.update = true;
                currentBegin.state = true;

                if (status.mark == "X") playersTurn("begin", status.mark, opponent.uuid);

                status.setMark("");
                break;

            case "EXIT":
                let receiveExit = property.msg as exitProperty
                status.setMark("");
                status.setYourTurn(false);

                opponent.setNick("");
                opponent.setUuid("");

                placeBorder.setOpponent(0);
                placeBorder.setTies(0);
                placeBorder.setYou(0);

                exit.setMsg(`${receiveExit.nick} ${receiveExit.value}`)
                exit.setState(true);
                exit.setUpdate(true);
                info.setActive(false);

                setTimeout(() => {
                    exit.setState(false);
                    exit.setUpdate(true);
                },1000 * 10)

                clearPositions();
                break;
        }
    },[property.type])
    return (
        <RouterProvider router={router}/>
    )
}

export default Index