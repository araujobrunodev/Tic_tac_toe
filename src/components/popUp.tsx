import { FC } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data_popUp from "../types/dataPopUp";
import send from "../websocket/send";
import currentRoom from "../types/room";
import "../css/popUp.css"

interface PopUpProp {
  /** type of message*/
  type: string,
  /** appear popup*/
  hidden: boolean,
  /** player name*/
  nick: string,
  /** message*/
  message: string,
  /** player identification*/
  uuid: string
}

const PopUp: FC<PopUpProp> = (prop) => {
  let [active, setActive] = useState(prop.hidden)
  let [progress, setProgress] = useState(0)
  let [height, setHeight] = useState(0);

  useEffect(() => {
    if (progress == 5) { setProgress(0); setActive(true); data_popUp.hidden = true }
    if (active == true) return;

    prop.type == "invite" ? setHeight(19) : setHeight(13);

    let time = setInterval(() => {
      setProgress(progress += 1);
    }, 1000);

    return () => clearInterval(time);
  }, [progress])

  return (<div id="popUp_body" hidden={active} style={{ height: height + "%" }}>
    <div id="progress_body">
      <div id="progress" style={{ width: +100 - (progress * 20) + "%" }}></div>
    </div>

    <p id="_nick">{prop.nick}</p>
    <p id="message">{prop.message}</p>

    {prop.type == "invite" ? <>
      <Link to="/playing">
        <Button
          id="accepted"
          value="Accepted"
          onClick={() => {
            setProgress(5);
            setActive(true);
            
            setTimeout(() => {
              data_popUp.hidden = true;
              currentRoom.opponent.nick = prop.nick
              currentRoom.opponent.uuid = prop.uuid
            },1000 * 2)

            send({
              type: "ACCEPTED",
              msg: { uuid: data_popUp.id }
            })
          }}
        />
      </Link>

      <Button
        id="denied"
        value="Denied"
        onClick={() => {
          setProgress(5);
          setActive(true);
          data_popUp.hidden = true;

          send({
            type: "DENIED",
            msg: { uuid: data_popUp.id }
          })
        }}
      />

    </> : undefined}
  </div>)
}

export default PopUp;