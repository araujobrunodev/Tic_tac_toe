import Input from "../components/input"
import Button from "../components/button"
import send from "../websocket/send"
import { useInvite } from "../types/invite"
import { useEffect } from "react";
import { usePage } from "../types/page";
import "../css/invite.css"

const Invite = () => {
  let page = usePage()
  let invite = useInvite()

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
            uuid: invite.uuid
          }
        })
      }} />
    </div>
  </>)
}

export default Invite;