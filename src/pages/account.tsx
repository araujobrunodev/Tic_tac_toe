import Button from "../components/button";
import { useStatus } from "../types/playerStatus";
import { usePage } from "../types/page";
import { useEffect } from "react";
import send from "../websocket/send";
import "../css/account.css"

const Account = () => {
    let page = usePage()
    let status = useStatus()
    const changePermission = (type: "invite strangers" | "random room", value: boolean) => {
        switch (type) {
            case "invite strangers":
                status.setInviteStrangers(value)
                break;
            
            case "random room":
                status.setRandomRoom(value)
                break;
        }
    }

    useEffect(() => {
        send({
            type: "change-permission",
            msg: {
                nick: status.nick,
                id: status.uuid,
                randomRoom: status.randomRoom,
                inviteStrangers: status.inviteStrangers
            }
        })
    },[status.randomRoom, status.inviteStrangers])

    useEffect(() => {
        page.setName("ACCOUNT")
        page.setOpenBars(true)
    },[])

    return (<>
        <div id="_info"> 
            <div className="info_account" id="name">
                Name: <span id="value-name">{
                status.nick
                }</span>
            </div>

            <div className="info_account" id="id">
                ID: <span id="value-id">{
                    status.uuid
                }
                </span>
                
                <Button id="copy" value="copy" onClick={() => {
                    navigator.clipboard.writeText(status.uuid);
                }}></Button>
            </div>

            <div className="info_account checkbox">
            <label className="check_label" htmlFor="checkIS">Invite strangers</label>
            <input checked={status.inviteStrangers} onChange={e => changePermission("invite strangers", e.target.checked)} className="check_input" type="checkbox" id="checkIS" />
            </div>
            
            <div className="info_account checkbox">
                <label className="check_label" htmlFor="checkRM">Random room</label>
                <input checked={status.randomRoom} onChange={e => changePermission("random room", e.target.checked)} className="check_input" type="checkbox" id="checkRM" />
            </div>
        </div>
    </>)
}

export default Account;