import { createContext, useContext } from "react";

interface Turn {
    state: boolean,
    setState: (s: boolean) => void
}

var activeTurn = {state:false}

const CreateTurn = createContext({} as Turn)
const useTurn = () => useContext(CreateTurn)

export {CreateTurn, useTurn}

export default activeTurn;