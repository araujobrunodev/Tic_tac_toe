interface Exit {
    /** message to warn how is left*/
    msg:string,
    /** active */
    state:boolean
    /** update Component */
    update:boolean
}

var currentExit:Exit = {
    msg:"",
    state:false,
    update:false
}

export {currentExit};