//To change the card data dynamically we can use the props to the function as properties. 
//When we pass any data dynamically we can pass it through the props
//So its like an arguments pass to the function e.g. Function(args, args)
//Propps is just a javascript object
//Config driven UI

import RestaurantCard from "./Restaurantcard";
import {useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";  

//Body component is the main component which will be used to display the restaurant list
const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]); //State Variable
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  console.log("Body Render  ")

  useEffect(()=> {fetchData();} , []);

  //Fetchdata logic for fetching data from the API
  const fetchData = async ()=> {

    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); // Fetched the data from the api directly
    const json = await data.json(); 
    console.log(json);
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

// we used the one liner code using the ternary operator ? is then and : is else
//this is example of conditional rendering
  return restaurantList.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="Filter">
              <div>
                <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
                <button onClick={ () => 
                  {
                    // Logic for search the data by the name in search bar by using the filter
                   const filterdRestaurant = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilterdRestaurant(filterdRestaurant);
                    console.log(filterdRestaurant); // it will update the UI
                  
                  }}>Search</button>
              </div>
                <button className="filter-btn" 
                
                onClick = {() => {
                    //filter  logic
                    const rest = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.2); 
                    console.log(rest);
                    setRestaurantList(rest);
                }
              }>Rated Restaurant</button>
            </div>
            <div className="Rest-container">

            {
              //We rendered the restaurant list here
              //We used the map function to iterate over the restaurantList and display the restaurant card 
                (filterdRestaurant.length > 0 ? filterdRestaurant : restaurantList).map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }      
            </div>
        </div>
    )
}

export default Body;
