import { createContext, useContext } from "react";

interface DataPopUp {
    /** appear popup*/
    hidden:boolean,
    /** player name*/
    nick:string,
    /** popup message */
    message: string,
    /** type of message*/
    type:string,
    /** player identification*/
    id:string,
    setHidden: (s: boolean) => void,
    setNick: (g: string) => void,
    setMessage: (h: string) => void,
    setType: (w: string) => void,
    setId: (j: string) => void
}

const CreateDataPopUp = createContext({} as DataPopUp)
const useDataPopUp = () => useContext(CreateDataPopUp)

export { CreateDataPopUp, useDataPopUp}

type dataPopUp = DataPopUp;

var data_popUp:dataPopUp = {
    nick:"",
    hidden:true,
    message:"",
    type:"",
    id:"",
    setHidden: () => {},
    setId: () => {},
    setMessage: () => {},
    setNick: () => {},
    setType: () => {},
};

export default data_popUp;