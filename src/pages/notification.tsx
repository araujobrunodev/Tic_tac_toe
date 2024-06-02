import Input from "../components/input";
import RedirectClient from "../components/redirect";
import { useEffect } from "react";
import { usePage } from "../types/page";
import "../css/notification.css";

const Notification = () => {
  let page = usePage()

  useEffect(() => {
      page.setName("NOTIFICATION")
      page.setOpenBars(true)
  },[])

  return (<>
    <RedirectClient/>

    <div id="messagens">
      <Input value="" placeholder="Serach someone" id="search" />
      <button id="lupa">
        <img src="/search.png"/>
      </button>

      <div id="underline"></div>
    </div>
  </>)
}

export default Notification;