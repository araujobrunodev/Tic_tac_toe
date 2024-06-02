import { FC } from "react";
import { useInvite } from "../types/invite";
import { useStatus } from "../types/playerStatus";

interface InputProps {
  /** valor do input */
  value: string,
  /** Descrição do input */
  placeholder?: string
  /** input identification */
  id: string
}


const Input: FC<InputProps> = (prop) => {
  let status = useStatus()
  let invite = useInvite()

  return (
    <input
      onChange={(event) => {
        let value = event.target.value
        switch (prop.id) {
          case "Nickname":
            status.setNick(value);
            break;
          case "send-id":
            invite.setUuid(value);
            break;
        }
      }}
      id={prop.id}
      placeholder={prop.placeholder}
      defaultValue={prop.value}
    />
  );
}

export default Input;