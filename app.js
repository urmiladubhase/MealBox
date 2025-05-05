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
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>

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

const RestaurantCard = (props) =>{
    return(
        <div className="Rest-card">
            <img alt="food-img" className="res-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEIutiEl_AEqN2YY34UZFu8ASLbkuBBMR2w&s"/>
            <h3>Italian chaska</h3>
            <p>Italian, Pizza, Burger<br></br>
                4.5 stars<br></br>
                20 min</p>
        </div>
    );
};

// to change the card data dynamically we can use the props to the function as properties. 
// when we pass any data dynamically we can pass it through the props
//So its like an arguments pass to the function e.g. Function(args, args)
// Propps is just a javascript object

//config driven UI
const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search</div>
            <div className="Rest-container">
                <RestaurantCard/>
                <RestaurantCard/>
                
            </div>
        </div>
    )
}
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