import { createHashRouter,Outlet } from "react-router-dom"
import Main from './pages/mainPage'
import Multiplayer from './pages/multiplayer'
import Page404 from "./pages/page404"
import GamePage from "./pages/Game"
import Notification from "./pages/notification"
import Account from "./pages/account"
import Invite from "./pages/invite"
import MainContainer from "./pages/mainContainer"

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
        path:"/notification",
        element: <MainContainer page={<Notification/>}/>
      },
      {
        path:"/invite",
        element: <MainContainer page={<Invite/>}/>
      }
    ]
  }
]);

export default router;