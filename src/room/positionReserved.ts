import positions from "../types/position";
import { UpdateBarGame } from "../pages/Game";

function positionReserved(collumn: string, position: string, mark: string, yourMark: string) {
    if (mark == yourMark) console.error("player has the wrong mark"); 
    switch (collumn) {
        case "1":
            switch (position) {
                case "1":
                    positions.collumn1.pos1 = mark;
                    break
                case "2":
                    positions.collumn1.pos2 = mark;
                    break
                case "3":
                    positions.collumn1.pos3 = mark;
                    break
            }
            break;

        case "2":
            switch (position) {
                case "1":
                    positions.collumn2.pos1 = mark;
                    break
                case "2":
                    positions.collumn2.pos2 = mark;
                    break
                case "3":
                    positions.collumn2.pos3 = mark;
                    break
            }
            break;

        case "3":
            switch (position) {
                case "1":
                    positions.collumn3.pos1 = mark;
                    break
                case "2":
                    positions.collumn3.pos2 = mark;
                    break
                case "3":
                    positions.collumn3.pos3 = mark;
                    break
            }
            break;
    }

    UpdateBarGame.update = true;
}

export default positionReserved;