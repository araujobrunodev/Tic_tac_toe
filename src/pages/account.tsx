import TopBar from "../components/topBar";
import BottomBar from "../components/bottomBar";
import Button from "../components/button";
import perfil from "../types/account";
import RedirectClient from "../components/redirect";
import "../css/account.css"

const Account = () => {
    return (<>
        <RedirectClient/>
        <TopBar pageName="ACCOUNT" previousPage="/"/>

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

        <BottomBar/>
    </>)
}

export default Account;