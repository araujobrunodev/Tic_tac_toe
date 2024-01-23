import { createContext, useContext } from "react";

interface AC {
    ScoreBoard:boolean,
    setScoreBoard: (val:boolean) => void
}

let ActiveComponent = createContext  ({} as AC);

let useActiveComponent = () => useContext(ActiveComponent);

export { ActiveComponent, useActiveComponent };