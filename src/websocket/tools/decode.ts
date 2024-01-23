const decode = (data:string) => {
    const decodeData = JSON.parse(data) as object;

    return decodeData;
} 

export default decode;