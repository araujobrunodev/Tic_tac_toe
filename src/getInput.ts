import perfil from "./types/account";
import inviteSomeone from "./types/invite";

function getComponentValue(id: string, value: string) {
  switch (id) {
    case "Nickname":
      perfil.setNickname(value);
      break;
    case "send-id":
      inviteSomeone.uuid = value;
      break;
  }
}

export default getComponentValue;