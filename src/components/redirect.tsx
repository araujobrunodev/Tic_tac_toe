import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export var Redirect = {
    value: false,
    to:""
}

const RedirectClient = () => {
    let navigate = useNavigate(); 
    
    useEffect(() => {
        let time = setInterval(() => {
            if (!Redirect.value) return;
            
            navigate("/"+Redirect.to);
            Redirect.value = false;
            Redirect.to = "";
        },200) 

        return () => clearInterval(time);
    })

    return (<></>)
}

export default RedirectClient;