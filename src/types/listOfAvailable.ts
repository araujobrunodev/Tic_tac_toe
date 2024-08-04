import { createContext, useContext } from "react";
import { available } from "./availables";

interface ListOfAvailable {
    player: available[],
    setPlayer: (f: available[]) => void
}

export type listOfAvailable = ListOfAvailable

const CreateListOfAvailable = createContext({} as ListOfAvailable)
const useListOfAvailable = () => useContext(CreateListOfAvailable)

export {CreateListOfAvailable, useListOfAvailable}
