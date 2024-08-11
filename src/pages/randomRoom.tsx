import { useEffect, useState } from "react"
import { usePage } from "../types/page"
import "../css/randomRoom.css"
import { useStatus } from "../types/playerStatus"
import send from "../websocket/send"
import { useBlockPlayers } from "../types/blockplayers"

const RandomRoom = () => {
    const page = usePage()
    const status = useStatus()
    const imgs = ["circle.svg", "close.svg"]
    const limitTime = 60 * 2
    const [indexImg, setIndexImg] = useState(0) 
    const [activeAnimation, setActiveAnimation] = useState(true)
    const [activeRandomRoom, setActiveRandomRoom] = useState(false)
    let blockPlayers = useBlockPlayers()
    let [countTime, setCountTime] = useState(0)
    let [secondsMsg, setSecondsMsg] = useState("")
    let [warn, setWarn] = useState("")

    //set page properties and payload random room
    useEffect(() => {
        page.setName("RANDOM ROOM")
        page.setOpenBars(true)
        setActiveRandomRoom(status.randomRoom)
        
        if (status.randomRoom) {
            if (blockPlayers.limit) return;

            send({
                type: "invite-by-random-room",
                msg: {
                    blockPlayers: blockPlayers.queue
                }
            })
        }
    },[])

    //update block players list
    useEffect(() => {
        if (!status.randomRoom) return
        if (countTime == limitTime) return
        if (blockPlayers.limit) return

        const time = setTimeout(() => {
            send({
                type: "invite-by-random-room",
                msg: {
                    blockPlayers: blockPlayers.queue
                }
            })

            // setNoChangesInBlockPlayers(blockPlayers.queue.length)
        },1000 * 20)

        return () => clearTimeout(time);
    },[blockPlayers.queue])

    useEffect(() => {
        if (countTime == limitTime || blockPlayers.limit) {
            setSecondsMsg("")
            setActiveAnimation(false)
            setWarn("No one for a match")
            setIndexImg(1)
            return
        }

        const time = setTimeout(() => {
            setIndexImg(0)
            setActiveAnimation(true)
            setCountTime(++countTime)
            setSecondsMsg(`${countTime} seconds`)
            setWarn("Finding someone...")
        },1000)

        return () => clearTimeout(time)
    },[countTime])

    useEffect(() => {
        if (!blockPlayers.limit) return

        let updateLimit = setTimeout(() => {
            blockPlayers.setQueue(blockPlayers.queue = [])
            blockPlayers.setLimit(blockPlayers.limit = false)
        }, 1000 * 1 * 1)

        return () => clearTimeout(updateLimit) 
    },[blockPlayers.limit])

    return (<div className="random_room">
        {
            activeRandomRoom 
            &&
            <div className="icon_loading">
                <img style={{animationName: (activeAnimation ? "scaleIt" : "")}} src={imgs[indexImg]} alt="" />
            </div> 
        }

        <p className="someone">
            {(activeRandomRoom ? 
                secondsMsg
                :
                "A opção random room está desativada. Ative-a para poder usar o random room." 
            )}
        </p>

        {
            activeRandomRoom 
            &&
            <p className="someone">{warn}</p>
        }
    </div>)
} 

export default RandomRoom