import Button from "../components/button";
import perfil from "../types/account";
import RedirectClient from "../components/redirect";
import { usePage } from "../types/page";
import { useEffect } from "react";
import "../css/account.css"

const Account = () => {
    let page = usePage()

    useEffect(() => {
        page.setName("ACCOUNT")
        page.setOpenBars(true)
    },[])

    return (<>
        <div id="_info"> 
            <div id="name">
                Name: <span id="value-name">{
                perfil.getNickname()
                }</span>
            </div>

            <div id="id">
                ID: <span id="value-id">{
                    perfil.getUUID()
                }
                </span>
                
                <Button id="copy" value="copy" onClick={() => {
                    navigator.clipboard.writeText(perfil.getUUID());
                }}></Button>
            </div>
        </div>
    </>)
}

export default Account;