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

var place_border:PlaceBorder = {
    opponnet:0,
    ties:0,
    you:0,
    setOpponent: () => {},
    setTies: () => {},
    setYou: () => {}
}

export type placeBorder = PlaceBorder;

export default place_border