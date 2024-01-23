import positionReserved from "../../room/positionReserved";
import { markedType } from "../../types/mark";

const MARKED = (receive: markedType) => {
    positionReserved(receive.collumn, receive.position, receive.mark);
}

export default MARKED;