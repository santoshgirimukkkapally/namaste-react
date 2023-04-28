import { useParams } from "react-router-dom";
// import  useRestaurant  from '../utils/useRestaurant'
import { useState, useEffect } from "react";
import { IMG_RESTO_CARD, RESTO_CARD_ITEMS_FIRST_PART, RESTO_CARD_ITEMS_SECOND_PART } from '../constants'

import Shimmer from './Shimmer'
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
const params = useParams();
const { id } = params;

const dispatch = useDispatch();
const handleAddItem = (item) => {
    dispatch(addItems(item));
}

// const restaurant = useRestaurant(id);
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

    return (!restaurant) ? <Shimmer/> : (
        <div className="w-1/2 ml-[25%]"> 
            <p className="text-left p-2 font-bold">{restaurant?.name}</p>
            <p className="text-left p-1 text-xs">{restaurant?.areaName}</p>
            <p className="text-left p-1 text-xs">{restaurant?.locality}</p>
            <p className="text-left p-1 text-xs">{restaurant?.city}</p>
            <h1 className="text-left p-1 text-xs">Restaurant id : {id}</h1>
            <img alt="restraurant image" src={IMG_RESTO_CARD + restaurant?.cloudinaryImageId}  />
            <ul data-testid="menu"> 
            {
                restaurantItems?.map((items, index) => { 
                    return <li className="py-2 border-b-2" key ={index}> {items?.card?.card?.title}
                    {items?.card?.card?.title && <button data-testid="addBtn" className="float-right hover:shadow-2xl cursor-pointer w-12 h-full rounded-md text-xs p-1 shadow-lg" onClick={() => handleAddItem(items?.card?.card?.title)}>Add</button>}
                    </li>

                })
            }
            </ul>


            {/* <ul data-testid="menu"> 
            {
                restaurantItems?.map((items) => { 
                    items?.card?.card?.itemCards?.map((items) => {   
                    console.log('msp', items?.card?.info?.name)
                        return <li className="py-2 border-b-2" key ={items?.card?.info?.id}> {items?.card?.info?.name}
                        {items?.card?.info?.name && <button data-testid="addBtn" className="float-right hover:shadow-2xl cursor-pointer w-12 h-full rounded-md text-xs p-1 shadow-lg" onClick={() => handleAddItem(items?.card?.info?.name)}>Add</button>}
                        </li>
                    })
                    

                })
            }
            </ul> */}

        </div>
    )

}

export default RestaurantMenu;
