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
import { useOpponent } from "./types/room"
import { playerType } from "./types/player"
import { bs } from "./types/beginS"
import { playersTurn } from "./room/turn"
import send from "./websocket/send"
import { turnType } from "./types/turn"
import { useInfo } from "./types/callAlert"
import { useTurn } from "./types/active"
import { useBegin } from "./types/activebegin"
import { markedType } from "./types/mark"
import { stateProperty } from "./types/state"
import { usePlaceBorder } from "./types/placeBorder"
import { useExit } from "./types/msgExit"
import { exitProperty } from "./types/exit"
import positionReserved from "./room/positionReserved"
import { useActiveComponent } from "./globalState"
import { usePosition } from "./types/position"
import { useDuel } from "./types/duel"
import { available } from "./types/availables"
import { listOfAvailable, useListOfAvailable } from "./types/listOfAvailable"
import { useBlockPlayers } from "./types/blockplayers"

const Index = () => {
    let [property, setProperty] = useState({} as receiverProperty)
    let status = useStatus()
    let invite = useInvite()
    let dataPopUp = useDataPopUp()
    let opponent = useOpponent()
    let info = useInfo()
    let placeBorder = usePlaceBorder()
    let exit = useExit()
    let active = useActiveComponent()
    let turn = useTurn()
    let begin = useBegin()
    let position = usePosition()
    let duel = useDuel()
    let availableList = useListOfAvailable()
    let blockPlayers = useBlockPlayers()

    const clearPositions = () => {
        position.setCollumn1({pos1: "", pos2: "", pos3: ""})
        position.setCollumn2({pos1: "", pos2: "", pos3: ""})
        position.setCollumn3({pos1: "", pos2: "", pos3: ""})
    }

    useEffect(() => {
        if (ws.readyState == ws.CLOSED ||
            ws.readyState == ws.CLOSING ||
            ws == undefined) return;
        
        ws.addEventListener("message", (receivedata) => {
            let decodeData = decode(receivedata.data as string) as receiverProperty;
            setProperty(decodeData)
        })
    })

    useEffect(() => {
        switch (property.type) {
            case "CONNECTED":
                let newStatus = (property.msg as msgUUid)
                status.setUuid(status.uuid = newStatus.uuid)
                status.setNick(status.nick = newStatus.newNick)
                break;

            case "list-of-available":
                availableList.setPlayer(property.msg as available[])
                break;

            case "no-player-available-random-room":
                blockPlayers.setLimit(true)
                break;

            case "invited-by-random-room":
                const uuid = (property.msg as {uuid:string}).uuid

                if (uuid.length == 0) return;

                blockPlayers.setQueue(
                    [...blockPlayers.queue, uuid]
                );
                break;

            case "INVITE":
                let inviteByPlayer = property.msg as invitePlayer
                invite.setNick(invite.nick = inviteByPlayer.nick);
                invite.setUuid(invite.uuid = inviteByPlayer.uuid);

                dataPopUp.setNick(dataPopUp.nick = invite.nick);
                dataPopUp.setHidden(dataPopUp.hidden = false);
                dataPopUp.setType(dataPopUp.type = "invite");
                dataPopUp.setMessage(dataPopUp.message = inviteByPlayer.value);
                dataPopUp.setId(dataPopUp.id = invite.uuid);

                Redirect.value = true;
                if (location.pathname != "/multiplayer")
                    Redirect.to = "multiplayer";
                else 
                    Redirect.to = "invite";
                break;

            case "DENIED":
                dataPopUp.setNick(dataPopUp.nick = property.msg as string);
                dataPopUp.setHidden(dataPopUp.hidden = false);
                dataPopUp.setType(dataPopUp.type = "");
                dataPopUp.setMessage(dataPopUp.message = "refused your invite");

                play.playing = false;
                break;

            case "ACCEPTED":
                let receiveAccepeted = property.msg as playerType
                opponent.setNick(opponent.nick = receiveAccepeted.nick)
                opponent.setUuid(opponent.uuid = receiveAccepeted.uuid)
                Redirect.value = true;
                Redirect.to = "playing";
                bs.state = true
                active.setScoreBoard(true)
                status.setInRoom(status.inRoom = true)

                play.playing = true;

                setInterval(() => {
                    if (bs.state) playersTurn("begin", status.uuid, opponent.uuid);
                },1000 * 10)
                break;

            case "PING":
                status.setAvailable(status.available = true);
                send({
                    type:"PONG",
                    msg: {
                        uuid: status.uuid
                    }
                })
                break;

            case "TURN":
                let receiveTurn = property.msg as turnType
                turn.setState(turn.state = false);
                bs.state = false;

                if (receiveTurn.nick == status.nick) {
                    status.setYourTurn(status.yourTurn = true);
                    info.setActive(info.active = true);
                    info.setMessage(info.message = receiveTurn.value);
                
                    if (receiveTurn.beginningOfTheGame == true) {
                        status.setMark(status.mark = "X");
                        opponent.setMark(opponent.mark = "O");
                    } else if (receiveTurn.beginningOfTheGame == false && status.mark == "") {
                        status.setMark(status.mark = "O");
                        opponent.setMark(opponent.mark = "X");
                    }
                } else {
                    status.setYourTurn(status.yourTurn = false);
                    info.setActive(info.active = false);
                }
            
                begin.setState(begin.state = false);
                break;

            case "MARKED":
                let value = property.msg as markedType
                positionReserved(value.collumn, value.position, value.mark, status.mark, position);
                break;

            case "STATE":
                let receiveState = property.msg as stateProperty
                clearPositions();
                duel.setState(duel.state = false);
                begin.setState(begin.state = true);

                if (status.nick == receiveState.winner) { 
                    placeBorder.setYou(++placeBorder.you);
                    status.setMark(status.mark = "");
                    playersTurn("begin", status.uuid, opponent.uuid);
                }
                if (status.nick == receiveState.loser) {
                    placeBorder.setOpponent(++placeBorder.opponnet);
                    status.setMark(status.mark = "");
                }
                break;

            case "TIE":
                clearPositions()

                if (duel.state) placeBorder.setTies(++placeBorder.ties);
            
                duel.setState(duel.state = false);
                begin.setState(begin.state = true);
                info.setActive(info.active = true);

                if (status.mark == "X") playersTurn("begin", status.uuid, opponent.uuid);

                status.setMark(status.mark = "");
                break;

            case "EXIT":
                let receiveExit = property.msg as exitProperty
                status.setMark(status.mark = "");
                status.setYourTurn(status.yourTurn = false);

                opponent.setNick(opponent.nick = "");
                opponent.setUuid(opponent.uuid = "");

                placeBorder.setOpponent(placeBorder.opponnet = 0);
                placeBorder.setTies(placeBorder.ties = 0);
                placeBorder.setYou(placeBorder.you = 0);

                exit.setMsg(exit.msg  = `${receiveExit.nick} ${receiveExit.value}`)
                exit.setState(exit.state = true);
                exit.setUpdate(exit.update = true);
                info.setActive(info.active = true);
                active.setScoreBoard(false)
                status.setInRoom(status.inRoom = false)

                setTimeout(() => {
                    exit.setState(exit.state = false);
                    exit.setUpdate(exit.update = true);
                },1000 * 10)

                clearPositions();
                break;
        }
        setProperty({} as receiverProperty)
    },[property.type])

    return (
        <RouterProvider router={router}/>
    )
}

export default Index