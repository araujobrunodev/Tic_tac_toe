import { connect } from "./websocket/connect.js";
import { RouterProvider } from "react-router-dom";
import { ActiveComponent } from "./globalState";
import { CreatePage } from "./types/page.js";
import {useState} from "react";
import router from './router.js';

const State = () => {
    let [active,setActive] = useState(false);
    let setScoreBoard = (score:boolean) => {
        setActive(score);
    }
    let [pageName,setPageName] = useState<string>("")
    let [bars,setBars] = useState<boolean>(true)

    connect()

    return (<>
        <CreatePage.Provider value={{name:pageName, setName: setPageName, OpenBars: bars, setOpenBars: setBars}}>
            <ActiveComponent.Provider value={{ScoreBoard:active,setScoreBoard:setScoreBoard}}>
                <RouterProvider router={router}/>
            </ActiveComponent.Provider>
        </CreatePage.Provider>
    </>)
}

export default State;