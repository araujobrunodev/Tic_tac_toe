import { FC } from "react"

interface ButtonProps {
    /** valor do butão */
    value:string,
    /** callback */
    onClick: () => void,
    /** button identification */
    id: string
}

const Button: FC<ButtonProps> = (props) => {
    return (<>
        <button
            id={props.id}
            onClick={() => props.onClick()}
        >
        {props.value}
        </button>
    </>)
}

export default Button;  