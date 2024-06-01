import { FC, ReactElement, useState } from "react"
import { CreatePage } from "./types/page"
import { ActiveComponent } from "./globalState"

interface CreateGlobalProps {
    children: ReactElement
}

const CreateGlobal: FC<CreateGlobalProps> = ({
    children
}) => {
    let [name, setName] = useState<string>("")
    let [bars,setBars] = useState<boolean>(true)   
    let [active,setActive] = useState(false);

    return (
        <CreatePage.Provider value={{name: name, OpenBars: bars, setName: setName, setOpenBars: setBars}}>
            <ActiveComponent.Provider value={{ScoreBoard: active, setScoreBoard: setActive}}>
                {children}
            </ActiveComponent.Provider>
        </CreatePage.Provider>
    )
}

export default CreateGlobal