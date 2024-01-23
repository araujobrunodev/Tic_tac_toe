import { Link } from "react-router-dom"
import { FC } from "react";
import H1 from "./title";
import "../css/topBar.css"

interface TopBarProps {
  /** current page */
  pageName: string,
  /** back to previous page*/
  previousPage: string
}

const TopBar: FC<TopBarProps> = (props) => {
  return (<div id="_topBar">
    <Link to={props.previousPage}>
      <img src={"/arrow_back.png"} id="arrow"/>
    </Link>

    <H1 id="NamePage" value={props.pageName}/>

    <Link to="/notification">
      <img src={"/bell.png"} id="bell"/>
    </Link>
  </div>)
}

export default TopBar;