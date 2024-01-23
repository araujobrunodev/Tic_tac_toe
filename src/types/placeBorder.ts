interface PlaceBorder {
    /** your points*/
    you:number,
    /** opponent points */
    opponnet:number,
    /** all ties*/
    ties:number
}

var place_border:PlaceBorder = {
    opponnet:0,
    ties:0,
    you:0
}

export type placeBorder = PlaceBorder;

export default place_border