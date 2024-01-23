import callInfo from "../types/callAlert";
import { useState,useReducer,useEffect } from "react";
import H1 from "./title";
import "../css/alert.css";

const Info = () => {
    var [hidden,setHidden] = useState(true);

    useEffect(() => {        
        let time = setInterval(() => {
            if (!callInfo.active) return setHidden(true);;
            setHidden(false);
        },100)

        return () => clearInterval(time);
    })

    return (<>
        <H1 id="warn2" hidden={hidden} value={callInfo.message} />
    </>)
}

export {Info}