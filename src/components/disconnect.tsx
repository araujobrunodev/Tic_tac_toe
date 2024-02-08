import { detectDisconnection } from "../websocket/disconnected"
import { useEffect, useState } from "react"
import "../css/disconnect.css"

type DISCONNECTION = {
    url: string,
    state: boolean
}

const Disconnect = () => {
    let [disconnection,setDisconnection] = useState<DISCONNECTION>(detectDisconnection())

    useEffect(() => {
        if (disconnection.state) 
            console.log("disconnected:",disconnection)
    },[disconnection.state])

    return (<>
        <p
        hidden={!disconnection.state}
        id="disconnect_p"
        >
        the website can't communicate with the server.
        </p>
    </>)
}

export default Disconnect