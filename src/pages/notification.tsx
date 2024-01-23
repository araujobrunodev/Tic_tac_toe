import TopBar from "../components/topBar";
import BottomBar from "../components/bottomBar";
import Input from "../components/input";
import CallPopUp from "../components/callPopUp";
import RedirectClient from "../components/redirect";
import "../css/notification.css";

const Notification = () => {
  return (<>
    <RedirectClient/>
    <TopBar pageName="NOTIFICATION" previousPage="/" />

    <CallPopUp/>

    <div id="messagens">
      <Input value="" placeholder="Serach someone" id="search" />
      <button id="lupa">
        <img src="/search.png"/>
      </button>

      <div id="underline"></div>
    </div>

    <BottomBar />
  </>)
}

export default Notification;