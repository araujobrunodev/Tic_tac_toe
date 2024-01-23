import { createBrowserRouter,Outlet } from "react-router-dom"
import Main from './pages/mainPage'
import Multiplayer from './pages/multiplayer'
import Page404 from "./pages/page404"
import GamePage from "./pages/Game"
import Notification from "./pages/notification"
import Account from "./pages/account"
import Invite from "./pages/invite"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Outlet/>,
    errorElement:<Page404/>,
    children: [
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/multiplayer",
        element:<Multiplayer/>
      },
      {
        path:"/playing",
        element:<GamePage/>
      },
      {
        path:"/account",
        element: <Account/>
      },
      {
        path:"/notification",
        element: <Notification/>
      },
      {
        path:"/invite",
        element:<Invite/>
      }
    ]
  }
]);

export default router;