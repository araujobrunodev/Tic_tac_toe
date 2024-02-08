import { detectDisconnection,disconnection } from "../websocket/disconnected"
import { useEffect } from "react"
import "../css/disconnect.css"

const Disconnect = () => {

    useEffect(() => {
        detectDisconnection()
    })

    return (<>
        <p
        hidden={disconnection.state}
        id="disconnect_p"
        >
        the website can't communicate with the server.
        </p>
    </>)
}

export default Disconnect