import positions from "../types/position";

function freePosition(collumn: string, position: string):boolean {
    let response = false;

    switch (collumn) {
        /* collumn 1 */
        case "1":
            switch (position) {
                /* position 1 */
                case "1":
                    positions.collumn1.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    positions.collumn1.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    positions.collumn1.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;

        /* collumn 2 */
        case "2":
            switch (position) {
                /* position 1 */
                case "1":
                    positions.collumn2.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    positions.collumn2.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    positions.collumn2.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;

        /* collumn 3 */
        case "3":
            switch (position) {
                /* position 1 */
                case "1":
                    positions.collumn3.pos1.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 2 */
                case "2":
                    positions.collumn3.pos2.length != 0 ?
                        response = true : response = false;
                    break;

                /* position 3 */
                case "3":
                    positions.collumn3.pos3.length != 0 ?
                        response = true : response = false;
                    break;
            }
            break;
    }

    return response;
}

export default freePosition;