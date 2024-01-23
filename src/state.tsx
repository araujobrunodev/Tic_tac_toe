import {RouterProvider} from "react-router-dom";
import {ActiveComponent} from "./globalState";
import {useState} from "react";
import router from './router.js';

const State = () => {
    let [active,setActive] = useState(false);
    let setScoreBoard = (score:boolean) => {
        setActive(score);
    }

    return (<>
        <ActiveComponent.Provider value={{ScoreBoard:active,setScoreBoard:setScoreBoard}}>
            <RouterProvider router={router}/>
        </ActiveComponent.Provider>
    </>)
}

export default State;