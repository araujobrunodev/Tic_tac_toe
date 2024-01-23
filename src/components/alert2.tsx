import { useReducer,useEffect } from "react";
import { currentExit } from "../types/msgExit";
import "../css/msgExit.css";

const AlertExit = () => {
    var [,setUpdate] = useReducer((soma) => soma + 1,0);

    useEffect(() => {
        let time = setInterval(() => {
            if (!currentExit.update) return;
            currentExit.update = false;
            setUpdate();
        },10)

        return () => clearInterval(time);
    })

    return (<>
        <h3 
        id="exitStyle" 
        hidden={!currentExit.state} >
            {currentExit.msg}
        </h3>
    </>)
}

export default AlertExit;