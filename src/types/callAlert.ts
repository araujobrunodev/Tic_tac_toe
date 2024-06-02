import { createContext, useContext } from "react";

interface Info {
    active: boolean,
    setActive: (ad: boolean) => void,
    message: string,
    setMessage: (h: string) => void
} 

const CreateInfo = createContext({} as Info)
const useInfo = () => useContext(CreateInfo)

export { CreateInfo, useInfo }