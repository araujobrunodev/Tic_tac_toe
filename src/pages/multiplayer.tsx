import { Link } from "react-router-dom"
import {useState} from "react";
import Button from "../components/button";
import { useEffect } from "react";
import { usePage } from "../types/page";
import send from "../websocket/send";
import { useStatus } from "../types/playerStatus";
import "../css/multiplayerButton.css"

const Multiplayer = () => {
  let page = usePage()
  let [appear, setAppear] = useState(true);
  let status = useStatus();
  const checkboxValue = (type: "random room" | "invite strangers",value:boolean) => {
    switch (type) {
      case "invite strangers":
        status.setInviteStrangers(value)
        break;

      case "random room":
        status.setRandomRoom(value)
        break;
    }
  }

  const gotIt = () => {
    sessionStorage.setItem("first-appear", "false")
    setAppear(false)
    send({
      type: "pop-up_permission",
      msg: {
        nick: status.nick,
        uuid: status.uuid,
        inviteStrangers: status.inviteStrangers,
        randomRoom: status.randomRoom
      }
    })
  }

  useEffect(() => {
    let firstAppear = sessionStorage.getItem("first-appear") 
    
    if (firstAppear == null) sessionStorage.setItem("first-appear", "true")

    page.setName("MULTIPLAYER")
    page.setOpenBars(true)
    
    if (firstAppear == "false") setAppear(false);
  },[])

  return (<>
    <>
    {
      appear ? 
      <div className="popup_permission">
        <p className="warn_permission">Este jogo oferece a opção de ser jogado com desconhecidos. Para jogar com pessoas alheias precisa ativar a opção “invite strangers”, fazendo isso você pode usar a barra de pesquisa ou procurar pessoas disponiveis para entrar em uma partida. </p>
        <p className="warn_permission middle">Há uma opção chamada de “random room” que convida pessoas através de salas aleatorias. </p>
        <p className="warn_permission middle">As opções fica na página “account”.</p>
        
        <div className="area_checklist">
          <input onChange={it => checkboxValue("invite strangers",it.target.checked)} className="warn_checkbox" type="checkbox" id="inviteStrangers"/>
          <label className="warn_label" htmlFor="inviteStrangers">Invite strangers</label>
          
        </div>
        
        <div className="area_checklist">          
          <input onChange={it => checkboxValue("random room",it.target.checked)} className="warn_checkbox" type="checkbox" id="randomRoom"/>
          <label className="warn_label" htmlFor="randomRoom">Random room</label>
        </div>
        
        <Button value="Entendi" className="theme_button" id="gotIt" onClick={() => gotIt()}/>
      </div> 
      :
      <div id="buttons">
      <Link className="multiplayer_button" to="/invite">
        <Button className="theme_button" id="invite"  value="Invite someone" onClick={() => { }}></Button>
      </Link>
      <Link className="multiplayer_button" to="/chat">
        <Button className="theme_button" id="chat" value="Chat" hidden={true} onClick={() => { }}></Button>
      </Link>
    </div>
    }
    </>
  </>)
}

export default Multiplayer;