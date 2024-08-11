import Input from "../components/input"
import Button from "../components/button"
import send from "../websocket/send"
import { useInvite } from "../types/invite"
import { useEffect } from "react";
import { usePage } from "../types/page";
import "../css/invite.css"
import { useStatus } from "../types/playerStatus";
import { Info } from "../components/alert";
import { useInfo } from "../types/callAlert";
import "../css/multiplayerButton.css"

const Invite = () => {
  let page = usePage()
  let invite = useInvite()
  let status = useStatus()
  let info = useInfo()

  useEffect(() => {
      page.setName("INVITE")
      page.setOpenBars(true)

      if (invite.uuid.length != 0) {
        invite.setNick("")
        invite.setUuid("")
        invite.setValue("")
      }
  },[])

  return (<>
    <div id="local-id">
      <Input id="send-id" value="" placeholder="Identification"/>
      <Button className="theme_button" value="send" onClick={() => {
        if (invite.uuid == status.uuid) {
          info.setMessage("Don't invite yourself")
          info.setActive(true)

          setTimeout(() => {
            info.setMessage("")
            info.setActive(false)
          }, 1000 * 2)

          return
        }

        send({
          type: "INVITE",
          msg: {
            uuid: invite.uuid
          }
        })
      }} />

      <Info/>
    </div>
  </>)
}

export default Invite;