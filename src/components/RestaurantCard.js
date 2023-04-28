import { useContext } from 'react';
import { IMG_RESTO_CARD } from '../constants'
import UserContext from '../utils/useContext'

const RestaurantCard = (props) => {
    const { user } = useContext(UserContext)
    const resData = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString } = resData.data;
     return (
        <div className="w-52 h-72 m-4 p-1 shadow-lg bg-slate-100 hover:shadow-2xl cursor-pointer">
            <img  className="hover:shadow-lg" alt="logo-res" src={IMG_RESTO_CARD + cloudinaryImageId}/>
            <div className="text-base font-bold"> {name} </div> 
            <div className="text-sm"> {cuisines.join(', ')} </div>
            <div className='mt-3'>
            <span className={`h-5 w-11 px-1 font-bold mt-3 ${avgRating >= 4 ? "bg-green-400" : "bg-orange-400"}`}>  <span className="star-icon">{avgRating} </span></span>
            <span className="text-xs ml-2"> ₹{costForTwo/100} FOR TWO</span>
            <span className="text-xs ml-2"> {slaString} </span>
            <span className="text-xs ml-2"> {user.name} </span>
            </div>
        </div>
     )
}

export default RestaurantCard;
