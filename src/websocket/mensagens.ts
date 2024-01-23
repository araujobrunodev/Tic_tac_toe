import { msgUUid } from "../types/account";
import { receiverProperty } from "../types/receive";
import { invitePlayer } from "../types/invite";
import { playerType } from "../types/player";
import { turnType } from "../types/turn";
import { markedType } from "../types/mark";
import { stateProperty } from "../types/state";
import { tieProperty } from "../types/tie";
import { exitProperty } from "../types/exit";

import CONNECTED from "./options/connected";
import INVITE from "./options/invite";
import DENIED from "./options/denied";
import ACCEPTED from "./options/accepted";
import PING from "./options/ping";
import TURN from "./options/turn";
import MARKED from "./options/marked";
import STATE from "./options/state";
import TIE from "./options/tie";
import EXIT from "./options/exit";

function mensagens(receive: receiverProperty) {
  switch (receive.type) {
    case "CONNECTED":
      CONNECTED(receive.msg as msgUUid);
      break;
    case "INVITE":
      INVITE(receive.msg as invitePlayer);
      break;

    case "DENIED":
      DENIED(receive.msg as string);
      break

    case "ACCEPTED":
      ACCEPTED(receive.msg as playerType);
      break

    case "PING":
      PING(receive.msg as msgUUid);
      break;

    case "TURN":
      TURN(receive.msg as turnType);
      break;

    case "MARKED":
      MARKED(receive.msg as markedType);
      break;

    case "STATE":
      STATE(receive.msg as stateProperty);
      break;

    case "TIE":
      TIE(receive.msg as tieProperty);
      break;

    case "EXIT":
      EXIT(receive.msg as exitProperty)
      break;
  }
}

export default mensagens;