//To change the card data dynamically we can use the props to the function as properties. 
//When we pass any data dynamically we can pass it through the props
//So its like an arguments pass to the function e.g. Function(args, args)
//Propps is just a javascript object
//Config driven UI

import RestaurantCard from "./Restaurantcard";

import { useState } from "react";
import {resList} from "../utils/constant"; 
  
const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList);
     
    return(
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" 
                onClick = {() => {
                    //filter  logic
                    
                    const rest = restaurantList.filter((restaurant)=> restaurant.info.avgRating > 4); 
                    console.log(rest);
                    setRestaurantList(rest);
                }
              }>Rated Restaurant</button>
            </div>
            <div className="Rest-container">

            {
                restaurantList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }      
            </div>
        </div>
    )
}

export default Body;
