import positions from "../types/position";
import { UpdateBarGame } from "../pages/Game";

const clearPositions = () => {
    positions.collumn1.pos1 = ""
    positions.collumn1.pos2 = ""
    positions.collumn1.pos3 = ""

    positions.collumn2.pos1 = ""
    positions.collumn2.pos2 = ""
    positions.collumn2.pos3 = ""

    positions.collumn3.pos1 = ""
    positions.collumn3.pos2 = ""
    positions.collumn3.pos3 = ""

    UpdateBarGame.update = true;
}

export default clearPositions;