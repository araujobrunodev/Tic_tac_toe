import H1 from "../components/title";
import { useEffect } from "react";
import { usePage } from "../types/page";

const Page404 = () => {
    let page = usePage()

    useEffect(() => {
        page.setOpenBars(false)
    },[])

    return (<>
        <H1 id="status" value="404"/>
        <H1 id="messagenOfWarn" value="can't find that page"/>
    </>);
}

export default Page404;