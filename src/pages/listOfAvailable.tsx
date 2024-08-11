import { useEffect, useState } from "react"
import { usePage } from "../types/page"
import { useStatus } from "../types/playerStatus"
import Item from "../components/item"
import { useListOfAvailable } from "../types/listOfAvailable"
import { available } from "../types/availables"
import "../css/listOfAvailable.css"
import send from "../websocket/send"

const ListOfAvailable = () => {
    const page = usePage()
    const status = useStatus();
    const availableList = useListOfAvailable()

    // clear all value into the list
    const clearList = () => setList(list = []);
    
    //set value to list
    const GetList = (filter: string) => {
        if (filter.length == 0) return;
        let players:available[] = [] 

        availableList.player.forEach(player => {
            const nick = player.nick;
           
            if (nick.search(filter) >= 0) {
                players.push(player)
            }
        })

        setList(list = players)
    }

    // set new value to list
    const playerFilter = (nick: string) => {
        clearList()

        if (nick.length > 0) 
            GetList(nick);
        else 
            setList(list = availableList.player)
    }

    let [list, setList] = useState([] as available[]) 
    let [firstTime, setFirstTime] = useState(false)

    // update available list by server
    useEffect(() => {
        let time = setTimeout(() => {
            send({
                type: "available-list",
                msg: {
                  id: status.uuid
                }
            })
            
            setList(list = availableList.player)
            setFirstTime(firstTime = true)

        }, 1000 * (firstTime ? 60 : 1))

        return () => clearTimeout(time);
    })

    //set topbar properties
    useEffect(() => {
        page.setName("LIST OF AVAILABLE")
        page.setOpenBars(true)
    },[]) 

    return (<div className="listOfAvailable">
        <div className="search">
            <input onChange={it => playerFilter(it.target.value)} type="text" placeholder="Search someone" className="search_bar"/>
        </div>

        <div className="list">
            {
            status.inviteStrangers ? 
             <div className="container_items">
                {
                
                list.map((player, index) => {
                    return <Item id={"item_available"} uuid={player.uuid} title={player.nick} key={index}/>
                })}
             </div> :
             <p className="warn_list">A opção invite strangers está desativada. Ative-a para poder usar a lista de disponiveis ou a barra de pesquisa.</p>
            }
        </div>
    </div>)
}

export default ListOfAvailable