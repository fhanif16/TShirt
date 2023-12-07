import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import MainLayout from './Components/Layout/MainLayout.jsx';
import Order from './Components/Order/Order.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('tshirts.json')
        
      },
    
      {
        path:"review",
        element:<Order></Order>
      },
      { 
        path:"about",
        element:<About></About>

      },
      {
        path:"contact",
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
