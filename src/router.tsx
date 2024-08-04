import { createHashRouter,Outlet } from "react-router-dom"
import Main from './pages/mainPage'
import Multiplayer from './pages/multiplayer'
import Page404 from "./pages/page404"
import GamePage from "./pages/Game"
import Account from "./pages/account"
import Invite from "./pages/invite"
import MainContainer from "./pages/mainContainer"
import ListOfAvailable from "./pages/listOfAvailable"

const router = createHashRouter([
  {
    path:"/",
    element:<Outlet/>,
    errorElement: <MainContainer page={<Page404/>}/>,
    children: [
      {
        path:"/",
        element: <MainContainer page={<Main/>}/>
      },
      {
        path:"/multiplayer",
        element: <MainContainer page={<Multiplayer/>}/>
      },
      {
        path:"/playing",
        element: <MainContainer page={<GamePage/>}/>
      },
      {
        path:"/account",
        element: <MainContainer page={<Account/>}/>
      },
      {
        path:"/invite",
        element: <MainContainer page={<Invite/>}/>
      }, 
      {
        path: "/listOfAvailable",
        element: <MainContainer page={<ListOfAvailable/>}/>
      }
    ]
  }
]);

export default router;