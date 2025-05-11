// to change the card data dynamically we can use the props to the function as properties. 
// when we pass any data dynamically we can pass it through the props
//So its like an arguments pass to the function e.g. Function(args, args)
// Propps is just a javascript object
//config driven UI
import RestaurantCard from "./Restaurantcard";
const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search</div>
            <div className="Rest-container">

            {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }      
            </div>
        </div>
    )
}

export default Body;
