import { rows } from "../types/position";

interface Pos {
    collumn1: rows,
    collumn2: rows,
    collumn3: rows
}

export type pos = Pos

function freePosition(collumn: string, row: string, position: Pos):boolean {
    let response = false;

    switch (collumn) {
        /* collumn 1 */
        case "1":
            switch (row) {
                /* position 1 */
                case "1":
                    position.collumn1.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    position.collumn1.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    position.collumn1.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;

        /* collumn 2 */
        case "2":
            switch (row) {
                /* position 1 */
                case "1":
                    position.collumn2.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    position.collumn2.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    position.collumn2.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;

        /* collumn 3 */
        case "3":
            switch (row) {
                /* position 1 */
                case "1":
                    position.collumn3.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    position.collumn3.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    position.collumn3.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;
    }

    return response;
}

export default freePosition;