import {useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import { CARD_MENU_URL,CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";




const CardMenu = () => {

    const [menuItems, setMenuItems] = useState(null); // State to hold menu items

    useEffect(() => { fetchMenu(); }, []);
    const {id} = useParams();
    console.log(id);


    async function fetchMenu() {
        const data = await fetch(CARD_MENU_URL+id);
        const json = await data.json();

        console.log(json);
        setMenuItems(json.data);
    }
    // Extracting the name from the menu items
    const {name, avgRatingString, costForTwoMessage, cuisines, } = menuItems?.cards[2]?.card?.card?.info || {};
    const {itemCards} = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {};
    console.log(itemCards);
    // const {imageId} = itemCards?.imageId || {};
    // console.log(imageId);

    return (menuItems === null) ?< Shimmer/> :(

        <div className="card-menu">
            <h1>{name} </h1>
            
            
            <ul>
                <li>Average Rating: {avgRatingString}</li>
                <li>Cost for Two: {costForTwoMessage}</li>
                <li>Cuisines: {cuisines?.join(", ")}</li>
            </ul>
            <ul>
                {itemCards?.map((item) => (
                <li key={item.card.info.id }>
                    {item.card.info.name} -
                 {"Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                 <br/>
                 <img alt="food-img" className="res-img-menu" src={CDN_URL+item.card.info.imageId}/>
              
                 </li>
                
               
                ))}
            </ul>


        </div>

    );
};

export default CardMenu;