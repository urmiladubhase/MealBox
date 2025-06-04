import {CDN_URL} from "../utils/constant";


const RestaurantCard = (props) =>{

    
    const {resData}=props;

    const {name,cuisines,avgRating,costForTwo="0"}=resData?.info; //This is functional chaining we are optimizing the code
    const deliveryTime = resData.info.sla?.deliveryTime ?? "N/A"; //on this logic we can check how data works
    return(
        
        <div className="Rest-card">
            <img alt="food-img" className="res-img" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Minutes</h4>

        </div>
    );
};

export default RestaurantCard;