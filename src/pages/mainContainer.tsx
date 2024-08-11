import { FC, ReactElement, useEffect, useState } from "react"
import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import Disconnect from "../components/disconnect"
import PopUp from "../components/popUp"
import { usePage } from "../types/page"
import RedirectClient from "../components/redirect"
import { ws } from "../websocket/connect"
import "../css/mainContainer.css"

interface MainContainerProps {
    page: ReactElement
}

const MainContainer: FC<MainContainerProps> = ({
    page
}) => {
    let Page = usePage()
    let [connected, setConnected] = useState(false)

    useEffect(() => {
        let time = setTimeout(() => {
            setConnected(ws.readyState == ws.OPEN)
        }, 1000 * 5);

        return () => clearTimeout(time)
    },[connected])
    
    return (
        <div className="main_container">
            <TopBar hidden={Page.OpenBars} pageName={Page.name} previousPage="/"/>
            
            <RedirectClient/>
            <PopUp />

            <div className="main">
                {page}
            </div>

            <Disconnect connected={connected}/>

            <BottomBar hidden={Page.OpenBars}/>
        </div>
    )
}

export default MainContainer