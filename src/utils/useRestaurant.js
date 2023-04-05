import { useState, useEffect } from "react";
import { IMG_RESTO_CARD, RESTO_CARD_ITEMS_FIRST_PART, RESTO_CARD_ITEMS_SECOND_PART} from '../constants'

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantItems, setRestaurantItems] = useState(null);
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
        return restaurant;
        }

}
export default useRestaurant;