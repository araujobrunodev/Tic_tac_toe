import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"
import Input from "../components/input"
import Button from "../components/button"
import send from "../websocket/send"
import inviteSomeone from "../types/invite"
import CallPopUp from "../components/callPopUp"
import RedirectClient from "../components/redirect"
import "../css/invite.css"

const Invite = () => {
  return (<>
    <RedirectClient/>
    <TopBar pageName="INVITE" previousPage="/multiplayer" />

    <CallPopUp/>

    <div id="local-id">
      <Input id="send-id" value="" placeholder="Identification"/>
      <Button id="send" value="send" onClick={() => {
        send({
          type: "INVITE",
          msg: {
            uuid:inviteSomeone.uuid
          }
        })
      }} />
    </div>

    <BottomBar />
  </>)
}

export default Invite;