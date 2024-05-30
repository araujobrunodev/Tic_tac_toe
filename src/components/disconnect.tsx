import { ws } from "../websocket/connect"
import { useEffect, useState } from "react"
import "../css/disconnect.css"

const Disconnect = () => {
    let [tryReconnect,setTryReconnect] = useState<number>(0)
    let [hidden, setHidden] = useState<boolean>(true)
    let lossOfConnection = sessionStorage.getItem("loss_of_connection")
    
    useEffect(() => {
        let connected = ws.readyState == ws.OPEN

        if (connected) {
            setTryReconnect(0)
            return setHidden(true)
        } else setHidden(false)
        
        if (lossOfConnection != undefined && Number(lossOfConnection) == 4) {
            sessionStorage.setItem("loss_of_connection", "0")
            return window.location.reload()
        }

        let time = setTimeout(() => {
            if (ws.readyState == ws.CLOSED) {
                
                setTryReconnect(++tryReconnect)
                sessionStorage.setItem("loss_of_connection",tryReconnect.toString())
                console.log("try reconnect:", tryReconnect)
            }
        }, 1000 * 15)

        return () => clearTimeout(time)
    })

    return (<>
        <p
        hidden={hidden}
        id="disconnect_p"
        >
        Server is down. Please reflesh the page or try again later.
        </p>
    </>)
}

export default Disconnect