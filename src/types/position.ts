import { createContext, useContext } from "react";

interface Rows {
    pos1: string,
    pos2: string,
    pos3: string
}

export type rows = Rows

interface Position {
    collumn1: rows,
    collumn2: rows,
    collumn3: rows,
    setCollumn1: (a: rows) => void,
    setCollumn2: (g: rows) => void,
    setCollumn3: (d: rows) => void,
}

type positionType = Position;

const CreatePosition = createContext({} as Position)
const usePosition = () => useContext(CreatePosition)

export { CreatePosition, usePosition }

var positions:positionType = {
    collumn1:{
        pos1:"",
        pos2:"",
        pos3:""
    },
    collumn2:{
        pos1:"",
        pos2:"",
        pos3:""
    },
    collumn3:{
        pos1:"",
        pos2:"",
        pos3:""
    },
    setCollumn1: () => {},
    setCollumn2: () => {},
    setCollumn3: () => {}
}

// export default positions;