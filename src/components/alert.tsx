import { useInfo } from "../types/callAlert";
import H1 from "./title";
import "../css/alert.css";

const Info = () => {
    let info = useInfo()

    return (<>
        <H1 id="warn2" hidden={info.active} value={info.message} />
    </>)
}

export {Info}