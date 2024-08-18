import { useStatus } from "../types/playerStatus"
import send from "../websocket/send"
import Button from "./button"
import { FC, useState } from "react"

interface ItemAvailable {
    title: string,
    id: string,
    uuid: string
}

const Item:FC<ItemAvailable> = ({
    title,
    id,
    uuid
}) => {
    const status = useStatus()
    const second = 1000 // 1000 minisencods == 1 second 
    let [time, setTime] = useState(5) // amount of seconds
    let [firstTime, setFirstTime] = useState(true)
    let [gray, setGray ] = useState(100)

    return (<div className="item_available" key={id}>
        <p 
            className="item_title"
        >
            {title}
        </p>
        
        <Button 
            style={{filter: `brightness(${gray}%)`}}
            onClick={() => {
                if (!firstTime) setGray(30)

                setTimeout(() => {
                    send({
                        type:"invite",
                        msg: {
                            strangerID: uuid,
                            yourUUID: status.uuid,
                            yourNick: status.nick,
                        }
                    })

                    if (firstTime) return setFirstTime(false)
                    setTime(time *= 5)
                    setGray(100)
                }, (firstTime ? 0 : (second * time)));
            }}
            value="Invite"
            className="item_button"
        />
    </div>)
}

export default Item