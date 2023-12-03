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
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx';
import AuthProvider from './AuthContext/AuthProvider.jsx';
import EditBiodata from './NormalUser/EditBiodata.jsx';
import ViewBiodata from './NormalUser/ViewBiodata.jsx';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
      },
      {
        path:"/biodata/:id",
        element:<ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/biodata/${params.id}`) 
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children :[
      {
        path: '/dashboard/editbiodata',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: '/dashboard/viewbiodata',
        element: <ViewBiodata></ViewBiodata>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>   
   </AuthProvider>
  </React.StrictMode>,
)
