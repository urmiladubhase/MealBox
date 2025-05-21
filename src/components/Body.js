// to change the card data dynamically we can use the props to the function as properties. 
// when we pass any data dynamically we can pass it through the props
//So its like an arguments pass to the function e.g. Function(args, args)
// Propps is just a javascript object
//config driven UI
import RestaurantCard from "./Restaurantcard";
import resList from "../utils/constant"; 
const Body = () => {

   
    return(
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" onClick={() => { resList = resList.filter((res) => res.info.avgRatingString > 4);
                setRestaurantList(resList);

                }
            }>Rated Restaurant</button>
            </div>
            <div className="Rest-container">

            {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }      
            </div>
        </div>
    )
}



/*onClick = { () => {
                    resList = resList.filter(() => resList.info.avgRating > 4);
                    console.log("onclick");
                }
                }
*/
export default Body;
