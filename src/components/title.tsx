import { FC } from "react";

interface H1Prop {
    /** identification */ 
    id:string,
    /** hidden component */
    hidden?:boolean,
    /** messagem */
    value:string
}

const H1:FC<H1Prop> = (props) => {
 return (<h1 
    hidden={props.hidden}
    id={props.id}>
    {
        props.value
    }
    </h1>)
}

export default H1;