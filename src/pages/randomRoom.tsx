import { useEffect, useState } from "react"
import { usePage } from "../types/page"
import "../css/randomRoom.css"
import { useStatus } from "../types/playerStatus"
import send from "../websocket/send"

const RandomRoom = () => {
    const page = usePage()
    const status = useStatus()
    const imgs = ["circle.svg", "person.png", "close.svg"]
    const [indexImg, setIndexImg] = useState(0) 
    const [activeAnimation, setActiveAnimation] = useState(true)
    const [activeRandomRoom, setActiveRandomRoom] = useState(false)

    useEffect(() => {
        page.setName("RANDOM ROOM")
        page.setOpenBars(true)
        setActiveRandomRoom(status.randomRoom)
        
        if (status.randomRoom) {
            send({
                type: "invite-by-random-room"
            })
        }
    },[])

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
                "gwagoanwifa"
                :
                "A opção random room está desativada. Ative-a para poder usar o random room." 
            )}
        </p>

        {
            activeRandomRoom 
            &&
            <p className="someone">{"feshse"}</p>
        }
    </div>)
} 

export default RandomRoom