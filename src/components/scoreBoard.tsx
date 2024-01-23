import updatePlaceBorder from "../types/updatePlaceBorder"
import { useReducer, useEffect, useState } from "react"
import { useActiveComponent } from "../globalState"
import place_border from "../types/placeBorder"
import currentRoom from "../types/room"
import perfil from "../types/account"
import H1 from "./title";
import "../css/placeBorder.css"

const ScoreBoard = () => {
  var [points, setPoints] = useState(place_border);
  var [, forceUpdate] = useReducer(some => some + 1, 0);
  let active = useActiveComponent();

  useEffect(() => {
    let time = setInterval(() => {
      console.log("opponent nick:",currentRoom.opponent.nick)
      currentRoom.opponent.nick.length > 3 ? active.setScoreBoard(true) : active.setScoreBoard(false);
      if (!updatePlaceBorder.update) return;

      updatePlaceBorder.update = false;
      setPoints(place_border);
      forceUpdate();
    },1000);

    return () => clearInterval(time);
  },[points])

  return (<>
    {active.ScoreBoard == true ? (<div id="place_border">
      <div id="you">
        {perfil.getNickname()} <span className="Span">{points.you}</span>
      </div>
      <div id="empty">
        Ties <span className="Span" id="middle">{points.ties}</span>
      </div>
      <div id="opponent">
        {currentRoom.opponent.nick} <span className="Span">{points.opponnet}</span>
      </div>
    </div>)
      : <H1 id="warn" value="You are not inside a room" />}
  </>)
}

export default ScoreBoard;