import data_popUp from "../types/dataPopUp";
import PopUp from "./popUp";

const CallPopUp = () => {
  return (<>
    <PopUp
      hidden={data_popUp.hidden}
      message={data_popUp.message}
      nick={data_popUp.nick}
      type={data_popUp.type}
      uuid={data_popUp.id}
    />
  </>)
}

export default CallPopUp;