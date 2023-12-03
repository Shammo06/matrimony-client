import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import LogIn from './Pages/LogIn/LogIn.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Biodatas from './Pages/Biodatas/Biodatas.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path:"/",
        element: <Home></Home> 
      },
      {
        path:"/logIn",
        element: <LogIn></LogIn> 
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/biodatas',
        element: <Biodatas></Biodatas>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children :[

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
