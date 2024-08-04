import { FC } from "react"

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
}

const Button: FC<ButtonProps> = (props) => {
    return (<>
        <button
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