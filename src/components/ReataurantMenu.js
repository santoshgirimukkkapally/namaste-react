import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_RESTO_CARD, RESTO_CARD_ITEMS_FIRST_PART, RESTO_CARD_ITEMS_SECOND_PART} from '../constants'

import Shimmer from './Shimmer'


const RestaurantMenu = () => {
const params = useParams();
const [restaurant, setRestaurant] = useState(null)
const [restaurantItems, setRestaurantItems] = useState(null)
const { id } = params;
console.log('id'. id)

useEffect(() =>{
getRestaurantInfo();
}, []);

async function getRestaurantInfo() {
const data = await fetch(RESTO_CARD_ITEMS_FIRST_PART + id + RESTO_CARD_ITEMS_SECOND_PART);

const json = await data.json();
console.log('name :::', json);

setRestaurant(json?.data?.cards[0]?.card?.card?.info)
console.log('restaurant :::', restaurant);

setRestaurantItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
console.log('restaurantItems :::', restaurantItems);
}
    return (!restaurant) ? <Shimmer/> : (
        <div className="restaurant-individual"> 
            <p className="RestaurantNameAddress_name__2IaTv">{restaurant?.name}</p>
            <h1>Restaurant id : {id}</h1>
            <img alt="restraurant image" src={IMG_RESTO_CARD + restaurant?.cloudinaryImageId}  />
            <ul> 
            {
                restaurantItems?.map((items, index) => { 
                    return <li key ={index}> {items?.card?.card?.title}</li>

                })
            }
            </ul>

        </div>
    )

}

export default RestaurantMenu;
