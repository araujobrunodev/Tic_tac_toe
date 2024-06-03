import { createContext, useContext } from "react";

interface Begin {
    /** is begin of the game */
    state:boolean,
    setState: (f: boolean) => void
}

type begin = Begin;

var currentBegin:begin = {
    state:false,
    setState: () => {}
}

const CreateBegin = createContext({} as Begin)
const useBegin = () => useContext(CreateBegin)

export {CreateBegin, useBegin}

export default currentBegin;