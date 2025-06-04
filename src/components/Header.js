import { useState } from "react";
import {LOGO_URL} from "../utils/constant";

const Header =() =>{
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact</li>
                    <li>Cart</li>
                    {/*the below line is to update the button */}
                    <button className="login" onClick={() =>{ btnName=== "login"? setBtnName("Logout") : setBtnName("login");}
                       
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;