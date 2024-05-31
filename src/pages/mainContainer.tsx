import { FC, ReactElement, useEffect } from "react"
import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import { usePage } from "../types/page"
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
            
            <div className="main">
                {page}
            </div>

            <BottomBar hidden={Page.OpenBars}/>
        </div>
    )
}

export default MainContainer