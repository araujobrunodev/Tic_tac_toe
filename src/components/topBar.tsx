import { Link } from "react-router-dom"
import { FC } from "react";
import H1 from "./title";
import "../css/topBar.css"
import { useStatus } from "../types/playerStatus";
import Button from "./button";
import send from "../websocket/send";
import { useOpponent } from "../types/room";

interface TopBarProps {
  /** current page */
  pageName: string,
  /** back to previous page*/
  previousPage: string,
  hidden: boolean
}

const TopBar: FC<TopBarProps> = (props) => {
  const status = useStatus()
  const opponent = useOpponent()

  return (
    <>{props.hidden && <div id="_topBar" hidden={props.hidden}>
    <Link to={props.previousPage}>
      <img src={"/arrow_back.png"} id="arrow"/>
    </Link>

    <H1 id="NamePage" value={props.pageName}/>

    <Button onClick={() => {
      send({
        type: "leave-room",
        msg: {
          me: status.uuid,
          otherPlayer: opponent.uuid
        }
      })
    }} value="LEAVE" className="leave"/>
  </div>}</>
  )
}

export default TopBar;