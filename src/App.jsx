import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./components/HomePage"
import Activies from "./components/activities"

const router= createBrowserRouter([
  {path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/portifolio_fotografia', element: <HomePage/>},
      {path:'/activities', element: <Activies/>},
    ]
  }
])

function App(){

  return <RouterProvider router={router}/>

}

export default App