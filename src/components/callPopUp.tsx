import { useDataPopUp } from "../types/dataPopUp";
import PopUp from "./popUp";

const CallPopUp = () => {
  let dataPopUp = useDataPopUp()
  
  return (<>
    <PopUp
      hidden={dataPopUp.hidden}
      message={dataPopUp.message}
      nick={dataPopUp.nick}
      type={dataPopUp.type}
      uuid={dataPopUp.id}
    />
  </>)
}

export default CallPopUp;