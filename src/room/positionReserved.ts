// import positions from "../types/position";
import { rows } from "../types/position";
import { UpdateBarGame } from "../pages/Game";

interface Pos {
    collumn1: rows,
    collumn2: rows,
    collumn3: rows
}

function positionReserved(collumn: string, row: string, mark: string, yourMark: string, position: Pos) {
    if (mark == yourMark) console.error("player has the wrong mark"); 
    switch (collumn) {
        case "1":
            switch (row) {
                case "1":
                    position.collumn1.pos1 = mark;
                    break
                case "2":
                    position.collumn1.pos2 = mark;
                    break
                case "3":
                    position.collumn1.pos3 = mark;
                    break
            }
            break;

        case "2":
            switch (row) {
                case "1":
                    position.collumn2.pos1 = mark;
                    break
                case "2":
                    position.collumn2.pos2 = mark;
                    break
                case "3":
                    position.collumn2.pos3 = mark;
                    break
            }
            break;

        case "3":
            switch (row) {
                case "1":
                    position.collumn3.pos1 = mark;
                    break
                case "2":
                    position.collumn3.pos2 = mark;
                    break
                case "3":
                    position.collumn3.pos3 = mark;
                    break
            }
            break;
    }

    UpdateBarGame.update = true;
}

export default positionReserved;