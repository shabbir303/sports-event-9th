import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element: <Home></Home>
    },
   {
    path:'/about',
    element: <About></About>
  },
    {
      path:'/service',
      element: <ServiceDetail></ServiceDetail>
    },
    {
      path:'/register',
      element: <Register></Register>
    },
    {
      path:'/login',
      element: <Login></Login>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
