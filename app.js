import React from "react";
import ReactDOM from "react-dom/client";
/*
Header:
-- Logo
--nav bar

Body:
--search bar
--Restaurant container
--Food cards

Footer:
--copyright
--contact
*/
const Header =() =>{
    return(
        <div className="header">
            <div>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>

            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )


}

const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
        </div>
        



    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);