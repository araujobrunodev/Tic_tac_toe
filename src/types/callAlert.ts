import { createContext, useContext } from "react";

interface Info {
    active: boolean,
    setActive: (ad: boolean) => void,
    message: string,
    setMessage: (h: string) => void
}

var callInfo = {
    active:false,
    message:""
} 

const CreateInfo = createContext({} as Info)
const useInfo = () => useContext(CreateInfo)

export { CreateInfo, useInfo }

export default callInfo;