import updatePlaceBorder from "../types/updatePlaceBorder"
import { useReducer, useEffect, useState } from "react"
import { useActiveComponent } from "../globalState"
import { usePlaceBorder } from "../types/placeBorder"
import { useOpponent } from "../types/room"
import { useStatus } from "../types/playerStatus"
import H1 from "./title";
import "../css/placeBorder.css"

const ScoreBoard = () => {
  let placeBorder = usePlaceBorder()
  var [, forceUpdate] = useReducer(some => some + 1, 0);
  let active = useActiveComponent();
  let status = useStatus()
  let opponent = useOpponent()

  useEffect(() => {
    let time = setInterval(() => {
      opponent.nick.length > 3 ? active.setScoreBoard(true) : active.setScoreBoard(false);
      if (!updatePlaceBorder.update) return;

      updatePlaceBorder.update = false;
      forceUpdate();
    },1000);

    return () => clearInterval(time);
  },[placeBorder.opponnet, placeBorder.ties, placeBorder.you])

  return (<>
    {active.ScoreBoard == true ? (<div id="place_border">
      <div id="you">
        {status.nick} <span className="Span">{placeBorder.you}</span>
      </div>
      <div id="empty">
        Ties <span className="Span" id="middle">{placeBorder.ties}</span>
      </div>
      <div id="opponent">
        {opponent.nick} <span className="Span">{placeBorder.opponnet}</span>
      </div>
    </div>)
      : <H1 id="warn" value="You are not inside a room" />}
  </>)
}

export default ScoreBoard;