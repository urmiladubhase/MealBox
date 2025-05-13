import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body"


// Data will be the list of objects so we can use it as array 




const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
          <Body/>
        </div>
       
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);