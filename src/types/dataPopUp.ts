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
    id:string
}

type dataPopUp = DataPopUp;

var data_popUp:dataPopUp = {
    nick:"",
    hidden:true,
    message:"",
    type:"",
    id:""
};

export default data_popUp;