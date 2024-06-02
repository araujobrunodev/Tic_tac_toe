import { connect } from "./websocket/connect.js";
import CreateGlobal from "./CreateGlobal.js";
import Index from "./index.js";
import receive from "./websocket/receive.js";

const State = () => {
    connect()

    return (
        <CreateGlobal children={<Index />}/>
    )
}

export default State;