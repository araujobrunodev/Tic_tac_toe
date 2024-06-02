import { createContext, useContext } from "react";

interface PlaceBorder {
    /** your points*/
    you:number,
    /** opponent points */
    opponnet:number,
    /** all ties*/
    ties:number,
    setYou: (s: number) => void,
    setOpponent: (a: number) => void,
    setTies: (g: number) => void
}

const CreatePlaceBorder = createContext({} as PlaceBorder)
const usePlaceBorder = () => useContext(CreatePlaceBorder)

export {CreatePlaceBorder, usePlaceBorder}

export type placeBorder = PlaceBorder;