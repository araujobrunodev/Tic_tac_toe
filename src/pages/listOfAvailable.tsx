import { useEffect } from "react"
import { usePage } from "../types/page"
import { useStatus } from "../types/playerStatus"
import "../css/listOfAvailable.css"
import Item from "../components/item"
import { useListOfAvailable } from "../types/listOfAvailable"

const ListOfAvailable = () => {
    const page = usePage()
    const status = useStatus();
    const availableList = useListOfAvailable()

    useEffect(() => {
        page.setName("LIST OF AVAILABLE")
        page.setOpenBars(true)
    })

    return (<div className="listOfAvailable">
        <div className="search">
            <input type="text" placeholder="Search someone" className="search_bar"/>
        </div>

        <div className="list">
            {
            status.inviteStrangers ? 
             <div className="container_items">
                {availableList.player.map((player, index) => {
                    if (player.nick == status.nick) return;

                    return (<Item uuid={player.uuid} id="item_available" title={player.nick} key={index}/>)
                })}
             </div> :
             <p className="warn_list">A opção invite strangers está desativada. Ative-a para poder usar a lista de disponiveis ou a barra de pesquisa.</p>
            }
        </div>
    </div>)
}

export default ListOfAvailable