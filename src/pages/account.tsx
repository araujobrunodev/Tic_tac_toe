import Button from "../components/button";
import { useStatus } from "../types/playerStatus";
import { usePage } from "../types/page";
import { useEffect } from "react";
import "../css/account.css"

const Account = () => {
    let page = usePage()
    let status = useStatus()

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
        </div>
    </>)
}

export default Account;