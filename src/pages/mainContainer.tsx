import { FC, ReactElement } from "react"
import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import "../css/mainContainer.css"

interface MainContainerProps {
    page: ReactElement
}

const MainContainer: FC<MainContainerProps> = ({
    page
}) => {
    return (
        <div className="main_container">
            <TopBar pageName="" previousPage="/"/>
            
            {page}

            <BottomBar />
        </div>
    )
}

export default MainContainer