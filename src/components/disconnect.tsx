import { detectDisconnection,disconnection } from "../websocket/disconnected"
import { useEffect } from "react"

const Disconnect = () => {

    useEffect(() => {
        detectDisconnection()
    },[disconnection.state])

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