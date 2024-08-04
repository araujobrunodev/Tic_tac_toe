import { useStatus } from "../types/playerStatus"
import send from "../websocket/send"
import Button from "./button"
import { FC } from "react"

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

    return (<div className="item_available" key={id}>
        <p 
            className="item_title"
        >
            {title}
        </p>
        
        <Button 
            onClick={() => 
                send({
                    type:"invite-stranger",
                    msg: {
                        strangerID: uuid,
                        yourUUID: status.uuid,
                        yourNick: status.nick,
                    }
                })
            }
            value="Invite"
            className="item_button"
        />
    </div>)
}

export default Item