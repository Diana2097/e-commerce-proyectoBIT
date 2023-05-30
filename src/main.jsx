import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from './paginas/App.jsx'
import About from './paginas/About.jsx'
import Login from './paginas/Login.jsx'
import Comprar from './paginas/Comprar.jsx'

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <App/>,
    errorElement:<Navigate to = "/App"/>
  },
  {
      path: "/About",
      element: <About/>, 
    },
 {
      path: "/Login",
      element: <Login/>, 
    },
    {
      path: "/Comprar",
      element: <Comprar/>, 
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)