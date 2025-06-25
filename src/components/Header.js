import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";

const Header =() =>{
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link  to= "/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    {/*the below line is to update the button */}
                    <button className="login" onClick={() =>{ btnName=== "login"? setBtnName("Logout") : setBtnName("login");}
                       
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;