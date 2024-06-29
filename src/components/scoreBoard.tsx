import { useActiveComponent } from "../globalState"
import { usePlaceBorder } from "../types/placeBorder"
import { useOpponent } from "../types/room"
import { useStatus } from "../types/playerStatus"
import H1 from "./title";
import "../css/placeBorder.css"

const ScoreBoard = () => {
  let placeBorder = usePlaceBorder()
  let active = useActiveComponent();
  let status = useStatus()
  let opponent = useOpponent()

  return (<>
    {active.ScoreBoard ? (<div id="place_border">
      <div className="info_scoreboard" id="you">
        {status.nick} <span className="Span">{placeBorder.you}</span>
      </div>
      <div className="info_scoreboard" id="empty">
        Ties <span className="Span" id="middle">{placeBorder.ties}</span>
      </div>
      <div className="info_scoreboard" id="opponent">
        {opponent.nick} <span className="Span">{placeBorder.opponnet}</span>
      </div>
    </div>)
      : <H1 id="warn" value="You are not inside a room" />}
  </>)
}

export default ScoreBoard;