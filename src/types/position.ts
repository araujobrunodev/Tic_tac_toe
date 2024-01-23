interface Position {
    collumn1: {
        pos1:string,
        pos2:string,
        pos3:string
    }
    collumn2: {
        pos1:string,
        pos2:string,
        pos3:string
    }
    collumn3: {
        pos1:string,
        pos2:string,
        pos3:string
    }
}

type positionType = Position;

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
    }
}

export default positions;