import { Children, FC, ReactElement, useState } from "react"
import { CreateStatus } from "./types/playerStatus"
import { CreateInvite } from "./types/invite"
import { CreatePage } from "./types/page"
import { ActiveComponent } from "./globalState"
import { CreateOpponent } from "./types/room"
import { CreatePlaceBorder } from "./types/placeBorder"
import { CreateExit } from "./types/msgExit"
import { CreateDataPopUp } from "./types/dataPopUp"
import { CreateInfo } from "./types/callAlert"
import { CreateBegin } from "./types/activebegin"
import { CreateTurn } from "./types/active"
import { CreatePosition, rows } from "./types/position"
import { CreateDuel } from "./types/duel"
import { CreateListOfAvailable, listOfAvailable } from "./types/listOfAvailable"
import { available } from "./types/availables"
import { CreateBlockPlayers } from "./types/blockplayers"

interface CreateGlobalProps {
    children: ReactElement
}

const CreateGlobal: FC<CreateGlobalProps> = ({
    children
}) => {
    let [uuid, setUuid] = useState<string>("")
    let [Mark, setMark] = useState<string>("")
    let [nick, setNick] = useState<string>("")
    let [available, setAvailable] = useState<boolean>(false)
    let [yourTurn, setYourTurn] = useState<boolean>(false) 
    let [inviteUuid, setInviteUuid] = useState<string>("")   
    let [inviteNick, setInviteNick] = useState<string>("")
    let [inviteStrangers, setInviteStrengers] = useState(false)
    let [randomRoom, setRandomRoom] = useState(false)   
    let [value, setValue] = useState<string>("")
    let [name, setName] = useState<string>("")
    let [bars,setBars] = useState<boolean>(true)   
    let [active,setActive] = useState(false)
    let [opponentUuid, setOpponentUuid] = useState<string>("")
    let [opponentNick, setOpponentNick] = useState<string>("")
    let [opponentMark, setOpponentMark] = useState<string>("")
    let [oppo, setOppo] = useState<number>(0)
    let [ties, setTies] = useState<number>(0)
    let [yourP, setYourP] = useState<number>(0)
    let [msg, setMsg] = useState<string>("")
    let [stateExit, setStateExit] = useState<boolean>(false)
    let [updateExit, setUpadateExit] = useState<boolean>(false)
    let [popUpHidden, setPopUpHidden] = useState<boolean>(true)
    let [popUpNick, setPopUpNick] = useState<string>("")
    let [popUpMessage, setPopUpMessage] = useState<string>("")
    let [popUpType, setPopUpType] = useState<string>("")
    let [popUpId, setPopUpId] = useState<string>("")
    let [infoActive, setInfoActive] = useState<boolean>(false)
    let [infoMsg,setInfoMsg] = useState("")
    let [begin, setBegin] = useState(false)
    let [turn, setTurn] = useState(false)
    let [pos1, setPos1] = useState({
        pos1: "",
        pos2: "",
        pos3: ""
    } as rows)
    let [pos2, setPos2] = useState({
        pos1: "",
        pos2: "",
        pos3: ""
    } as rows)
    let [pos3, setPos3] = useState({
        pos1: "",
        pos2: "",
        pos3: ""
    } as rows)
    let [duel, setDuel] = useState(false)
    let [player, setPlayer] = useState([] as available[])
    let [blocks, setBlocks] = useState([] as string[])
    let [blockLimit, setBlockLimit] = useState(false)

    return (
        <CreateStatus.Provider value={{inviteStrangers: inviteStrangers, setInviteStrangers: setInviteStrengers, randomRoom: randomRoom,  setRandomRoom: setRandomRoom,available: available, setAvailable: setAvailable, nick: nick, setNick: setNick, setUuid: setUuid, setMark: setMark, setYourTurn: setYourTurn,uuid: uuid, mark: Mark, yourTurn: yourTurn}}>
            <CreateInvite.Provider value={{nick:inviteNick, setNick: setInviteNick, setUuid: setInviteUuid, setValue: setValue, uuid: inviteUuid, value: value}}>
                <CreatePage.Provider value={{name: name, OpenBars: bars, setName: setName, setOpenBars: setBars}}>
                    <ActiveComponent.Provider value={{ScoreBoard: active, setScoreBoard: setActive}}>
                        <CreateOpponent.Provider value={{mark:opponentMark, nick:opponentNick, setMark:setOpponentMark, setNick: setOpponentNick, setUuid: setOpponentUuid, uuid: opponentUuid}}>
                            <CreatePlaceBorder.Provider value={{opponnet: oppo, setOpponent: setOppo, setTies: setTies, setYou: setYourP, ties: ties, you: yourP}}>
                                <CreateExit.Provider value={{msg: msg, setMsg: setMsg, setState: setStateExit, setUpdate: setUpadateExit, state: stateExit, update: updateExit}}>
                                    <CreateDataPopUp.Provider value={{hidden: popUpHidden, id: popUpId, message: popUpMessage, nick: popUpNick, setHidden: setPopUpHidden, setId: setPopUpId, setMessage: setPopUpMessage, setNick: setPopUpNick, setType: setPopUpType, type: popUpType}}>
                                        <CreateInfo.Provider value={{active: infoActive, message: infoMsg, setActive: setInfoActive, setMessage: setInfoMsg}}>
                                            <CreateBegin.Provider value={{setState: setBegin, state: begin}}>
                                                <CreateTurn.Provider value={{setState: setTurn, state: turn}}>
                                                    <CreatePosition.Provider value={{collumn1: pos1, collumn2: pos2, collumn3: pos3, setCollumn1: setPos1, setCollumn2: setPos2, setCollumn3: setPos3}}>
                                                        <CreateDuel.Provider value={{setState: setDuel, state: duel}}>
                                                            <CreateListOfAvailable.Provider value={{player: player, setPlayer: setPlayer}}>
                                                                <CreateBlockPlayers.Provider value={{limit: blockLimit, setLimit: setBlockLimit, queue: blocks, setQueue: setBlocks}}>
                                                                    {children} 
                                                                </CreateBlockPlayers.Provider>
                                                            </CreateListOfAvailable.Provider>
                                                        </CreateDuel.Provider>
                                                    </CreatePosition.Provider>
                                                </CreateTurn.Provider>
                                            </CreateBegin.Provider>
                                        </CreateInfo.Provider>
                                    </CreateDataPopUp.Provider>
                                </CreateExit.Provider>
                            </CreatePlaceBorder.Provider>
                        </CreateOpponent.Provider>
                    </ActiveComponent.Provider>
                </CreatePage.Provider>
            </CreateInvite.Provider>
        </CreateStatus.Provider>
    )
}

export default CreateGlobal