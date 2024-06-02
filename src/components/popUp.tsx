import { FC } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDataPopUp } from "../types/dataPopUp";
import send from "../websocket/send";
import { useOpponent } from "../types/room";
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
  let opponent = useOpponent()
  let dataPopUp = useDataPopUp()

  useEffect(() => {
    if (progress == 5) { setProgress(0); setActive(true); dataPopUp.setHidden(true) }
    if (active == true) return;

    prop.type == "invite" ? setHeight(19) : setHeight(13);

    let time = setInterval(() => {
      setProgress(progress += 1);
    }, 1000);

    return () => clearInterval(time);
  }, [progress])

  return (
    <>{
      !active && 
        <div id="popUp_body" style={{ height: height + "%" }}>
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
                  dataPopUp.setHidden(true);
                  opponent.setNick(prop.nick)
                  opponent.setUuid(prop.uuid)
                },1000 * 2)
              
                send({
                  type: "ACCEPTED",
                  msg: { uuid: dataPopUp.id }
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
              dataPopUp.setHidden(true);
            
              send({
                type: "DENIED",
                msg: { uuid: dataPopUp.id }
              })
            }}
          />

        </> : undefined}
      </div>
    }</>
  )
}

export default PopUp;