import { Link } from "react-router-dom"
import { FC } from "react"
import "../css/bottomBar.css"

interface BottomBarProps {
  hidden: boolean
}

const BottomBar: FC<BottomBarProps> = ({
  hidden
}) => {
  return (
    <>{hidden && <div id="_bottomBar">

    <Link to="/multiplayer">
      <img src={"/carta.png"} />
    </Link>

    <Link to="/playing">
      <img src={"/play.png"} />
    </Link>

    <Link to="/account">
      <img src={"/person.png"} />
    </Link>

  </div>}</>
  )
}

export default BottomBar;