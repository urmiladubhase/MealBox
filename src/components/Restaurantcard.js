import {CDN_URL} from "../utils/constant";


const RestaurantCard = (props) =>{

    
    const {resData}=props;
    const {name,cuisines,avgRatingString="0",costForTwo="0",deliveryTime}=resData?.info; //This is functional chaining we are optimizing the code
    return(
        
        <div className="Rest-card">
            <img alt="food-img" className="res-img" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRatingString} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString}Minutes</h4>

        </div>
    );
};

export default RestaurantCard;