import { useEffect, useState } from "react"
import { usePage } from "../types/page"

const RandomRoom = () => {
    const page = usePage()
    const imgs = ["circle.svg", "person.png", "close.svg"]
    const [indexImg, setIndexImg] = useState(0) 

    useEffect(() => {
        page.setName("RANDOM ROOM")
        page.setOpenBars(true)
    },[])

    return (<div className="random_room">
        <div className="icon_loading">
            <img src={imgs[indexImg]} alt="" />
        </div>

        <p className="someone">{"fwag"}</p>

        <p className="someone">{"feshse"}</p>
    </div>)
} 

export default RandomRoom