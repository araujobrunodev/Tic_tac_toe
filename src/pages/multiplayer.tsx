import { Link } from "react-router-dom"
import TopBar from "../components/topBar";
import Button from "../components/button";
import CallPopUp from "../components/callPopUp";
import BottomBar from "../components/bottomBar";
import RedirectClient from "../components/redirect";
import "../css/multiplayerButton.css"

const Multiplayer = () => {
  return (<>
    <RedirectClient/>
    <TopBar pageName="MULTIPLAYER" previousPage="/" />

    <CallPopUp/>

    <div id="buttons">
      <Link to="/invite">
        <Button id="invite" value="Invite someone" onClick={() => { }}></Button>
      </Link>
      <Link to="/chat">
        <Button id="chat" value="Chat" onClick={() => { }}></Button>
      </Link>
    </div>

    <BottomBar />
  </>)
}

export default Multiplayer;