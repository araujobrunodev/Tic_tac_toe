import Input from "../components/input"
import Button from "../components/button"
import connect from "../inputs/connect"
import H1 from "../components/title"
import {useState} from "react"
import '../css/App.css'
import { useEffect } from "react";
import { usePage } from "../types/page";
import { useStatus } from "../types/playerStatus"

const Main = () => {
  let [active,setActive] = useState(true);
  let page = usePage()
  let status = useStatus()

  useEffect(() => {
      page.setOpenBars(false)
  },[])

  return (
    <>
      <div className='container-logo'>
        <p id='logo1'>TIC</p>
        <p id='logo2'>TAC</p>
        <p id='logo3'>TOE</p>
      </div>

      <div className='_Inputs'>
        <Input value="" id="Nickname" />
        <Button
          id="play"
          value="Play"
          onClick={() => {
            if (connect(status.nick)) return setActive(true);
            setActive(false);
          }} />
      </div>

      <H1 id="condition" value="Nickname between 3 and 8 digits. (space before 3 digits do not count)" hidden={active}/>
    </>
  )
}

export default Main;