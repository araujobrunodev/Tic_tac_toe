import router from "./router"
import { RouterProvider } from "react-router-dom"

const Index = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Index