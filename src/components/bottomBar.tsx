import { Link } from "react-router-dom"
import "../css/bottomBar.css"

const BottomBar = () => {
  return (<div id="_bottomBar">

    <Link to="/multiplayer">
      <img src={"/carta.png"} />
    </Link>

    <Link to="/playing">
      <img src={"/play.png"} />
    </Link>

    <Link to="/account">
      <img src={"/person.png"} />
    </Link>

  </div>)
}

export default BottomBar;