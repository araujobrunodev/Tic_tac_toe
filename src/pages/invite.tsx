import Input from "../components/input"
import Button from "../components/button"
import send from "../websocket/send"
import inviteSomeone from "../types/invite"
import CallPopUp from "../components/callPopUp"
import Disconnect from "../components/disconnect"
import RedirectClient from "../components/redirect"
import { useEffect } from "react";
import { usePage } from "../types/page";
import "../css/invite.css"

const Invite = () => {
  let page = usePage()

  useEffect(() => {
      page.setName("INVITE")
      page.setOpenBars(true)
  },[])

  return (<>
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
  </>)
}

export default Invite;