import { connectOrReconnect, ws } from "../websocket/connect"
import { useEffect, useState } from "react"
import "../css/disconnect.css"

const limitToReconnect = 3

const Disconnect = () => {
    let [tryReconnect,setTryReconnect] = useState<number>(0)
    let [hidden, setHidden] = useState<boolean>(true)
    
    useEffect(() => {
        let connected = ws.readyState == ws.OPEN

        if (connected) {
            setTryReconnect(0)
            return setHidden(true)
        } else setHidden(false)
        
        if (tryReconnect == limitToReconnect) return;

        let time = setTimeout(() => {
            if (ws.readyState == ws.CLOSED) {
                connectOrReconnect(true)
                setTryReconnect(++tryReconnect)
                console.log("try reconnect:", tryReconnect)
            }
        }, 1000 * 10)

        return () => clearTimeout(time)
    })

    return (<>
        <p
        hidden={hidden}
        id="disconnect_p"
        >
        the website can't communicate with the server.
        </p>
    </>)
}

export default Disconnect