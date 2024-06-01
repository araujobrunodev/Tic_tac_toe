import { createContext, useContext } from "react";

interface Exit {
    /** message to warn how is left*/
    msg:string,
    /** active */
    state:boolean,
    /** update Component */
    update:boolean,
    setMsg: (g: string) => void,
    setState: (a: boolean) => void,
    setUpdate: (h: boolean) => void
}

const CreateExit = createContext({} as Exit)
const useExit = () => useContext(CreateExit)

export { CreateExit, useExit }

var currentExit:Exit = {
    msg:"",
    state:false,
    update:false,
    setMsg: () => {},
    setState: () => {},
    setUpdate: () => {}
}

export {currentExit};