import { FC, ReactElement } from "react"
import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import Disconnect from "../components/disconnect"
import PopUp from "../components/popUp"
import { usePage } from "../types/page"
import RedirectClient from "../components/redirect"
import "../css/mainContainer.css"

interface MainContainerProps {
    page: ReactElement
}

const MainContainer: FC<MainContainerProps> = ({
    page
}) => {
    let Page = usePage()
    
    return (
        <div className="main_container">
            <TopBar hidden={Page.OpenBars} pageName={Page.name} previousPage="/"/>
            
            <RedirectClient/>
            <PopUp />

            <div className="main">
                {page}
            </div>

            <Disconnect />

            <BottomBar hidden={Page.OpenBars}/>
        </div>
    )
}

export default MainContainer