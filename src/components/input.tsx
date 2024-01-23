import { FC } from "react";
import getComponentValue from "../getInput";

interface InputProps {
  /** valor do input */
  value: string,
  /** Descrição do input */
  placeholder?: string
  /** input identification */
  id: string
}


const Input: FC<InputProps> = (prop) => {
  return (
    <input
      onChange={(event) => getComponentValue(prop.id,event.target.value)}
      id={prop.id}
      placeholder={prop.placeholder}
      defaultValue={prop.value}
    />
  );
}

export default Input;