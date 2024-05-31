import { Link } from "react-router-dom"
import Button from "../components/button";
import RedirectClient from "../components/redirect";
import "../css/multiplayerButton.css"
import { useEffect } from "react";
import { usePage } from "../types/page";

const Multiplayer = () => {
  let page = usePage()

  useEffect(() => {
      page.setName("MULTIPLAYER")
      page.setOpenBars(true)
  },[])

  return (<>
    <div id="buttons">
      <Link to="/invite">
        <Button id="invite" value="Invite someone" onClick={() => { }}></Button>
      </Link>
      <Link to="/chat">
        <Button id="chat" value="Chat" hidden={true} onClick={() => { }}></Button>
      </Link>
    </div>
  </>)
}

export default Multiplayer;