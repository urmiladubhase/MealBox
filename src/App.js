import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js"
import { createBrowserRouter, RouterProvider, out, Outlet} from "react-router-dom";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";  
import About from "./components/About.js";
import CardMenu from "./components/cardMenu.js";
// import './style.css';

// Data will be the list of objects so we can use it as array 
const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
          <Outlet/> {/* This will render the child components based on the route */}
        </div>
       
    )
}
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
         {
       path: "/",
      element: <Body/>,

    },
        {
       path: "/about",
      element: <About/>,

    },

    {
       path: "/contact",
      element: <Contact/>,

    },
    {
      path:"/restaurant/:id",
      element: <CardMenu/>,

    },
      ],
      errorElement: <Error />, // Error handling for the root path
      
    },
    

]); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);