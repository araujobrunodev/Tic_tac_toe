import Button from "./button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDataPopUp } from "../types/dataPopUp";
import send from "../websocket/send";
import { useOpponent } from "../types/room";
import { useActiveComponent } from "../globalState";
import "../css/popUp.css"

const PopUp = () => {
  let [progress, setProgress] = useState(0)
  let [height, setHeight] = useState(0);
  let opponent = useOpponent()
  let dataPopUp = useDataPopUp()
  let active = useActiveComponent()

  const clearPopUp = () => {
    dataPopUp.setHidden(dataPopUp.hidden = true)
    dataPopUp.setId(dataPopUp.id = "")
    dataPopUp.setMessage(dataPopUp.message = "")
    dataPopUp.setNick(dataPopUp.nick = "")
    dataPopUp.setType(dataPopUp.type = "")
  } 

  useEffect(() => {
  if (progress == 5) { setProgress(0); clearPopUp() }
    setHeight(14)

    let time = setInterval(() => {
      setProgress(++progress);
    }, 1000 * 4);

    return () => clearInterval(time);
  }, [progress, dataPopUp.hidden])

  return (
    <>{
      !dataPopUp.hidden && 
        <div id="popUp_body" style={{ height: height + "%" }}>
        <div id="progress_body">
          <div id="progress" style={{ width: 100 - (progress * 20) + "%" }}></div>
        </div>
      
        <p id="_nick">{dataPopUp.nick}</p>
        <p id="message">{dataPopUp.message}</p>
      
        <div className="buttons">
          {dataPopUp.type == "invite" && <>
            <Link id="link_button" to="/playing">
              <Button
                id="accepted"
                value="Accepted"
                onClick={() => {
                  opponent.setNick(opponent.nick = dataPopUp.nick)
                  opponent.setUuid(opponent.uuid = dataPopUp.id)
                  
                  setTimeout(() => {
                    active.setScoreBoard(true)
                  },1000 * 2)
                  
                  send({
                    type: "ACCEPTED",
                    msg: { uuid: dataPopUp.id }
                  })

                  setProgress(5);
                }}
              />
            </Link>
              
            <Button
              id="denied"
              value="Denied"
              onClick={() => {
                send({
                  type: "DENIED",
                  msg: { uuid: dataPopUp.id }
                })

                setProgress(5);
              }}
            />

          </>}
        </div>
      </div>
    }</>
  )
}

export default PopUp;