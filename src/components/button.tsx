import React, { FC } from "react"

interface ButtonProps {
    /** valor do butão */
    value:string,
    /** callback */
    onClick: () => void,
    /** button identification */
    id?: string,
    /** hide feature*/
    hidden?: boolean,
    className?: string
    style?: React.CSSProperties
}

const Button: FC<ButtonProps> = (props) => {
    return (<>
        <button
            style={props.style}
            id={props.id}
            onClick={() => props.onClick()}
            hidden={props.hidden}
            className={props.className}
        >
        {props.value}
        </button>
    </>)
}

export default Button;  