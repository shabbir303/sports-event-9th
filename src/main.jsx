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
import Error from './Pages/Error/Error';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';
import SportsNews from './Pages/Sports_News/SportsNews';
import Footer from './Pages/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service/:id',
        element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
        loader: () => fetch('/Data/event.json')
      },
      {
        path: '/register',
        element: <Register></Register>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/sports',
        element: <PrivateRoutes><SportsNews></SportsNews></PrivateRoutes>
      },
      {
       path:'/footer',
       element:<Footer></Footer>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
