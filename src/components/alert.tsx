import { useInfo } from "../types/callAlert";
import { useState, useEffect } from "react";
import H1 from "./title";
import "../css/alert.css";

const Info = () => {
    var [hidden,setHidden] = useState(true);
    let info = useInfo()

    useEffect(() => {        
        let time = setInterval(() => {
            if (!info.active) return setHidden(true);;
            setHidden(false);
        },100)

        return () => clearInterval(time);
    })

    return (<>
        <H1 id="warn2" hidden={hidden} value={info.message} />
    </>)
}

export {Info}